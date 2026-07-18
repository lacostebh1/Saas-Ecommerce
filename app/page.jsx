'use client';

import OrderForm from './order-form';
import { useLang } from './lang-context';
import { LANGS } from '../lib/i18n';

// Avis clients affichés dans leur langue d'origine (premiers acheteurs européens)
// Avis réels d'achats vérifiés, relevés sur l'annonce du fabricant (JJRC R40) — photos d'acheteurs de la même annonce.
const REVIEWS = [
  { img: '/img/review-1.jpg', stars: '★★★★★', text: '« Le robot est conforme à la description, la qualité est bonne. La batterie était chargée, il a fonctionné immédiatement. Les enfants ont vraiment adoré. Je le recommande ! »', who: 'a***r — achat vérifié' },
  { img: '/img/review-2.jpg', stars: '★★★★★', text: '« Excellent produit, excellent vendeur. Le produit est arrivé en bon état, sans aucun dommage ni défaut. »', who: 'Acheteur vérifié' },
  { img: '/img/review-3.jpg', stars: '★★★★☆', text: "« Je l'ai essayé un instant et c'est sympa ^^ »", who: 's***o — achat vérifié' },
];

export default function Home() {
  const { lang, setLang, t } = useLang();
  return (
    <>
      <div className="announce">{t.announce}</div>
      <header className="header">
        <div className="header-inner">
          <a className="logo" href="#top">
            <img src="/img/logo.png" alt="SmartRobotMo" style={{ height: 48, width: 'auto', display: 'block' }} />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <select className="lang-select" value={lang} onChange={(e) => setLang(e.target.value)} aria-label="Langue">
              {LANGS.map((l) => (
                <option key={l.code} value={l.code}>{l.flag} {l.code.toUpperCase()}</option>
              ))}
            </select>
            <a className="cta-mini" href="#commander">{t.headerCta}</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <h1>{t.hero.h1[0]}<em>{t.hero.h1[1]}</em>{t.hero.h1[2]}</h1>
              <p className="sub">{t.hero.sub}</p>
              <div className="badges">
                {t.hero.badges.map((b) => <span className="badge" key={b}>{b}</span>)}
              </div>
              <div className="price-row">
                <span className="price">59,90 €</span>
              </div>
              <a className="cta" href="#commander">{t.hero.cta}</a>
              <p className="hero-note">{t.hero.note}</p>
            </div>
            <div className="hero-img">
              <img src="/img/robot-6.jpg" alt={t.hero.imgAlt} />
              <div className="float-badge">{t.hero.float}</div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="benefits">
          <div className="container">
            <h2 className="section-title">{t.benefits.title}</h2>
            <p className="section-sub">{t.benefits.sub}</p>
            <div className="benefit-grid">
              {t.benefits.items.map(([icon, h, p]) => (
                <div className="benefit" key={h}>
                  <div className="icon">{icon}</div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section>
          <div className="container">
            <h2 className="section-title">{t.gallery.title}</h2>
            <p className="section-sub">{t.gallery.sub}</p>
            <div className="gallery-grid">
              <video src="/video/gestuel.mp4" autoPlay muted loop playsInline controls preload="metadata" aria-label="SmartBot One" />
              <video src="/video/danse.mp4" muted loop playsInline controls preload="metadata" aria-label="SmartBot One" />
              <img src="/img/robot-2.jpg" alt="SmartBot One" />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews">
          <div className="container">
            <h2 className="section-title">{t.reviewsSec.title}</h2>
            <p className="section-sub">{t.reviewsSec.sub}</p>
            <div className="review-grid">
              {REVIEWS.map((r) => (
                <div className="review" key={r.who}>
                  <img src={r.img} alt="" />
                  <div className="stars">{r.stars}</div>
                  <p>{r.text}</p>
                  <div className="who">{r.who}</div>
                </div>
              ))}
            </div>
            <p className="review-note">{t.reviewsSec.note}</p>
          </div>
        </section>

        {/* OFFER */}
        <section>
          <div className="container">
            <div className="offer-box">
              <h2 className="section-title">{t.offer.title}</h2>
              <div className="price-row" style={{ justifyContent: 'center' }}>
                <span className="price">59,90 €</span>
              </div>
              <ul className="offer-list">
                {t.offer.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
              <br />
              <a className="cta" href="#commander">{t.offer.cta}</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 className="section-title">{t.faq.title}</h2>
            <p className="section-sub">{t.faq.sub}</p>
            {t.faq.items.map(([q, a]) => (
              <details className="faq-item" key={q}>
                <summary>{q}</summary>
                <div className="answer">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* ORDER */}
        <section className="order" id="commander">
          <div className="container">
            <h2 className="section-title">{t.order.title}</h2>
            <p className="section-sub">{t.order.sub}</p>
            <OrderForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="container cols">
          <div>
            <h4>SmartRobotMo</h4>
            <p>{t.footer.company}<br />
            Contact : contact@smartrobotmo.com<br />
            www.smartrobotmo.com</p>
          </div>
          <div>
            <h4>{t.footer.info}</h4>
            <p>{t.footer.infoTxt.map((l, i) => <span key={i}>{l}<br /></span>)}</p>
          </div>
          <div>
            <h4>{t.footer.pay}</h4>
            <p>{t.footer.payTxt.map((l, i) => <span key={i}>{l}<br /></span>)}</p>
          </div>
        </div>
      </footer>

      <a className="sticky-cta" href="#commander">{t.sticky}</a>
    </>
  );
}
