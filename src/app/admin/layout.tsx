import { redirect } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getCurrentUser } from "@/server/auth";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/produits", label: "Produits" },
  { href: "/admin/commandes", label: "Commandes" }
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") redirect("/login");
  return (
    <Container className="py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-ink/10 pb-4">
        <h1 className="text-xl font-bold">Admin · {user.email}</h1>
        <nav className="flex flex-wrap gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-medium hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-6">{children}</div>
    </Container>
  );
}
