import OrderForm from './order-form';

export default function Home() {
  return (
    <>
      <div className="announce">🚚 Livraison OFFERTE en France, Belgique, Espagne, Italie, Pays-Bas &amp; Pologne — Offre de lancement −25%</div>
      <header className="header">
        <div className="header-inner">
          <a className="logo" href="#top">
            <img src="/img/logo.png" alt="SmartRobotMo" style={{ height: 48, width: 'auto', display: 'block' }} />
          </a>
          <a className="cta-mini" href="#commander">Commander</a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <h1>Le robot qui obéit à <em>un geste de la main</em>.</h1>
              <p className="sub">
                SmartBot One, c&apos;est 32 cm d&apos;intelligence : il marche, danse, parle, s&apos;illumine
                et se programme. Le cadeau qui coupe le souffle — et qui occupe les enfants pendant des heures.
              </p>
              <div className="badges">
                <span className="badge">✋ Contrôle gestuel</span>
                <span className="badge">🕺 Mode danse</span>
                <span className="badge">🧠 50 actions programmables</span>
                <span className="badge">🎙️ Enregistreur vocal</span>
                <span className="badge">💡 LED immersives</span>
              </div>
              <div className="price-row">
                <span className="price">59,90 €</span>
                <span className="price-old">79,90 €</span>
                <span className="price-tag">−25%</span>
              </div>
              <a className="cta" href="#commander">Je commande — livraison offerte</a>
              <p className="hero-note">✅ Paiement à la livraison disponible · 📦 Expédition sous 24-48h · 🔁 Retours 14 jours</p>
            </div>
            <div className="hero-img">
              <img src="/img/robot-6.jpg" alt="SmartBot One — robot humanoïde intelligent de 32 cm" />
              <div className="float-badge">⭐ 4,8/5 — note moyenne des premiers clients</div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="benefits">
          <div className="container">
            <h2 className="section-title">Pourquoi les enfants (et les parents) l&apos;adorent</h2>
            <p className="section-sub">Un vrai robot compagnon, pas un jouet de plus au fond du placard.</p>
            <div className="benefit-grid">
              <div className="benefit">
                <div className="icon">✋</div>
                <h3>Il obéit aux gestes</h3>
                <p>Un mouvement de la main et il avance, recule, tourne. Effet magique garanti dès la première démo.</p>
              </div>
              <div className="benefit">
                <div className="icon">🧠</div>
                <h3>Il apprend à coder</h3>
                <p>Jusqu&apos;à 50 actions programmables en séquence : une initiation ludique à la logique et à la programmation.</p>
              </div>
              <div className="benefit">
                <div className="icon">🕺</div>
                <h3>Il danse et chante</h3>
                <p>Modes danse, musique, histoires et enregistrement vocal : il rejoue la voix de votre enfant.</p>
              </div>
              <div className="benefit">
                <div className="icon">🔋</div>
                <h3>Prêt à jouer</h3>
                <p>Batterie rechargeable USB incluse, visière et torse LED, articulations mobiles. De 5 à 12 ans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section>
          <div className="container">
            <h2 className="section-title">SmartBot One en action</h2>
            <p className="section-sub">Visière LED animée, torse lumineux, télécommande ergonomique — 32 cm de présence.</p>
            <div className="gallery-grid">
              <video src="/video/gestuel.mp4" autoPlay muted loop playsInline controls preload="metadata" aria-label="Le SmartBot One obéit au geste de la main" />
              <video src="/video/danse.mp4" muted loop playsInline controls preload="metadata" aria-label="Le SmartBot One danse" />
              <img src="/img/robot-2.jpg" alt="SmartBot One avec sa boîte et sa télécommande" />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews">
          <div className="container">
            <h2 className="section-title">Ils l&apos;ont déjà adopté</h2>
            <p className="section-sub">Retours des premiers clients du SmartBot One.</p>
            <div className="review-grid">
              <div className="review">
                <img src="/img/review-1.jpg" alt="Photo client du robot reçu" />
                <div className="stars">★★★★★</div>
                <p>« Reçu en 10 jours, très bien emballé. Mon fils de 7 ans ne le lâche plus, le contrôle par gestes fonctionne vraiment bien. »</p>
                <div className="who">Sandrine M. — Lille, France</div>
              </div>
              <div className="review">
                <img src="/img/review-2.jpg" alt="Photo client du robot en fonctionnement" />
                <div className="stars">★★★★★</div>
                <p>« Los efectos de luz son impresionantes y el modo baile es divertidísimo. Calidad mejor de lo esperado. »</p>
                <div className="who">Carlos R. — Valencia, España</div>
              </div>
              <div className="review">
                <img src="/img/review-3.jpg" alt="Photo client du robot avec sa télécommande" />
                <div className="stars">★★★★☆</div>
                <p>« Robot świetnie chodzi i tańczy, pilot jest prosty w obsłudze. Idealny prezent na urodziny. »</p>
                <div className="who">Kasia W. — Warszawa, Polska</div>
              </div>
            </div>
            <p className="review-note">Avis issus des premiers acheteurs du produit (source fournisseur vérifiée, note moyenne 4,8/5).</p>
          </div>
        </section>

        {/* OFFER */}
        <section>
          <div className="container">
            <div className="offer-box">
              <h2 className="section-title">Offre de lancement</h2>
              <div className="price-row" style={{ justifyContent: 'center' }}>
                <span className="price">59,90 €</span>
                <span className="price-old">79,90 €</span>
              </div>
              <ul className="offer-list">
                <li>SmartBot One (32 cm) + télécommande</li>
                <li>Batterie rechargeable USB incluse</li>
                <li>Livraison offerte et suivie (7-14 jours)</li>
                <li>Paiement à la livraison disponible</li>
                <li>Retours gratuits sous 14 jours</li>
              </ul>
              <br />
              <a className="cta" href="#commander">Profiter de l&apos;offre −25%</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="section-sub">Tout ce qu&apos;il faut savoir avant de commander.</p>
            <details className="faq-item">
              <summary>Pour quel âge est-il adapté ?</summary>
              <div className="answer">SmartBot One est recommandé de 5 à 12 ans (norme CE, ne convient pas aux moins de 36 mois). Les plus jeunes adorent la danse et les lumières, les plus grands la programmation.</div>
            </details>
            <details className="faq-item">
              <summary>Quels sont les délais de livraison ?</summary>
              <div className="answer">Expédition sous 24-48h, livraison suivie en 7 à 14 jours ouvrés en France, Belgique, Espagne, Italie, Pays-Bas et Pologne. Un numéro de suivi vous est envoyé par e-mail.</div>
            </details>
            <details className="faq-item">
              <summary>Comment fonctionne le paiement ?</summary>
              <div className="answer">Vous pouvez payer par carte bancaire (paiement sécurisé) ou choisir le paiement à la livraison : vous ne réglez qu&apos;à la réception du colis.</div>
            </details>
            <details className="faq-item">
              <summary>La batterie est-elle incluse ?</summary>
              <div className="answer">Oui, le robot intègre une batterie rechargeable par USB (câble fourni). La télécommande nécessite 2 piles AA (non incluses).</div>
            </details>
            <details className="faq-item">
              <summary>Et si le robot ne plaît pas ?</summary>
              <div className="answer">Vous disposez de 14 jours après réception pour changer d&apos;avis, conformément au droit européen de rétractation. Le remboursement est intégral.</div>
            </details>
          </div>
        </section>

        {/* ORDER */}
        <section className="order" id="commander">
          <div className="container">
            <h2 className="section-title">Commandez votre SmartBot One</h2>
            <p className="section-sub">Stock limité pour l&apos;offre de lancement — expédition sous 24-48h.</p>
            <OrderForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="container cols">
          <div>
            <h4>SmartRobotMo</h4>
            <p>SMARTROBOTMO LTD — société enregistrée en Angleterre &amp; Pays de Galles.<br />
            Contact : contact@smartrobotmo.com<br />
            www.smartrobotmo.com</p>
          </div>
          <div>
            <h4>Informations</h4>
            <p>Livraison 7-14 jours<br />Retours sous 14 jours<br />Garantie légale 2 ans</p>
          </div>
          <div>
            <h4>Paiement</h4>
            <p>Carte bancaire (sécurisé)<br />Paiement à la livraison</p>
          </div>
        </div>
      </footer>

      <a className="sticky-cta" href="#commander">🤖 Commander — 59,90 € livraison offerte</a>
    </>
  );
}
