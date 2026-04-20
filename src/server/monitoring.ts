/**
 * Wrapper minimal pour Sentry.
 *
 * On n'installe le SDK que si SENTRY_DSN est défini, pour ne pas
 * alourdir le bundle en dev. Active-le en prod avec:
 *   npm install @sentry/nextjs
 *   + SENTRY_DSN=https://... dans .env
 *
 * Pour un reporting complet (source maps, performance), installer
 * `@sentry/nextjs` et suivre `npx @sentry/wizard@latest -i nextjs`.
 */

type ErrorContext = {
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
  user?: { id?: string; email?: string };
};

export function captureError(err: unknown, ctx?: ErrorContext): void {
  const dsn = process.env.SENTRY_DSN;
  if (!dsn) {
    console.error("[monitoring] error", err, ctx);
    return;
  }
  try {
    const payload = {
      exception: {
        values: [
          {
            type: err instanceof Error ? err.name : "Error",
            value: err instanceof Error ? err.message : String(err),
            stacktrace:
              err instanceof Error && err.stack ? { frames: parseStack(err.stack) } : undefined
          }
        ]
      },
      tags: ctx?.tags,
      extra: ctx?.extra,
      user: ctx?.user,
      release: process.env.VERCEL_GIT_COMMIT_SHA,
      environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
      platform: "javascript",
      timestamp: Date.now() / 1000
    };
    const { host, projectId, publicKey } = parseDsn(dsn);
    const url = `https://${host}/api/${projectId}/store/`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Sentry-Auth": `Sentry sentry_version=7,sentry_client=smartrobotmo/0.1,sentry_key=${publicKey}`
      },
      body: JSON.stringify(payload)
    }).catch(() => {
      // noop — on ne veut pas casser la requête si Sentry est down.
    });
  } catch {
    console.error("[monitoring] parse error", err);
  }
}

function parseDsn(dsn: string) {
  const u = new URL(dsn);
  return {
    host: u.host,
    projectId: u.pathname.replace(/^\//, ""),
    publicKey: u.username
  };
}

function parseStack(stack: string) {
  return stack
    .split("\n")
    .slice(1)
    .map((line) => ({ filename: line.trim() }));
}
