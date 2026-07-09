// i18n SmartRobotMo — fr (défaut), es, it, nl, pl.
export const LANGS = [
  { code: 'fr', flag: '🇫🇷' },
  { code: 'es', flag: '🇪🇸' },
  { code: 'it', flag: '🇮🇹' },
  { code: 'nl', flag: '🇳🇱' },
  { code: 'pl', flag: '🇵🇱' },
];

export const UI = {
  fr: {
    announce: '🚚 Livraison OFFERTE en France, Belgique, Espagne, Italie, Pays-Bas & Pologne — Offre de lancement −25%',
    headerCta: 'Commander',
    hero: {
      h1: ['Le robot qui obéit à ', 'un geste de la main', '.'],
      sub: "SmartBot One, c'est 32 cm d'intelligence : il marche, danse, parle, s'illumine et se programme. Le cadeau qui coupe le souffle — et qui occupe les enfants pendant des heures.",
      badges: ['✋ Contrôle gestuel', '🕺 Mode danse', '🧠 50 actions programmables', '🎙️ Enregistreur vocal', '💡 LED immersives'],
      cta: 'Je commande — livraison offerte',
      note: '✅ Paiement à la livraison disponible · 📦 Expédition sous 24-48h · 🔁 Retours 14 jours',
      float: '⭐ 4,8/5 — note moyenne des premiers clients',
      imgAlt: 'SmartBot One — robot humanoïde intelligent de 32 cm',
    },
    benefits: {
      title: "Pourquoi les enfants (et les parents) l'adorent",
      sub: 'Un vrai robot compagnon, pas un jouet de plus au fond du placard.',
      items: [
        ['✋', 'Il obéit aux gestes', 'Un mouvement de la main et il avance, recule, tourne. Effet magique garanti dès la première démo.'],
        ['🧠', 'Il apprend à coder', "Jusqu'à 50 actions programmables en séquence : une initiation ludique à la logique et à la programmation."],
        ['🕺', 'Il danse et chante', 'Modes danse, musique, histoires et enregistrement vocal : il rejoue la voix de votre enfant.'],
        ['🔋', 'Prêt à jouer', 'Batterie rechargeable USB incluse, visière et torse LED, articulations mobiles. De 5 à 12 ans.'],
      ],
    },
    gallery: { title: 'SmartBot One en action', sub: 'Visière LED animée, torse lumineux, télécommande ergonomique — 32 cm de présence.' },
    reviewsSec: { title: "Ils l'ont déjà adopté", sub: 'Retours des premiers clients du SmartBot One.', note: 'Avis issus des premiers acheteurs du produit (source fournisseur vérifiée, note moyenne 4,8/5).' },
    offer: {
      title: 'Offre de lancement',
      list: ['SmartBot One (32 cm) + télécommande', 'Batterie rechargeable USB incluse', 'Livraison offerte et suivie (7-14 jours)', 'Paiement à la livraison disponible', 'Retours gratuits sous 14 jours'],
      cta: "Profiter de l'offre −25%",
    },
    faq: {
      title: 'Questions fréquentes', sub: "Tout ce qu'il faut savoir avant de commander.",
      items: [
        ['Pour quel âge est-il adapté ?', 'SmartBot One est recommandé de 5 à 12 ans (norme CE, ne convient pas aux moins de 36 mois). Les plus jeunes adorent la danse et les lumières, les plus grands la programmation.'],
        ['Quels sont les délais de livraison ?', 'Expédition sous 24-48h, livraison suivie en 7 à 14 jours ouvrés en France, Belgique, Espagne, Italie, Pays-Bas et Pologne. Un numéro de suivi vous est envoyé par e-mail.'],
        ['Comment fonctionne le paiement ?', "Vous pouvez payer par carte bancaire (paiement sécurisé) ou choisir le paiement à la livraison : vous ne réglez qu'à la réception du colis."],
        ['La batterie est-elle incluse ?', 'Oui, le robot intègre une batterie rechargeable par USB (câble fourni). La télécommande nécessite 2 piles AA (non incluses).'],
        ['Et si le robot ne plaît pas ?', "Vous disposez de 14 jours après réception pour changer d'avis, conformément au droit européen de rétractation. Le remboursement est intégral."],
      ],
    },
    order: { title: 'Commandez votre SmartBot One', sub: 'Stock limité pour l\'offre de lancement — expédition sous 24-48h.' },
    form: {
      title: '🤖 SmartBot One — 59,90 €', freeShip: '(livraison offerte)',
      name: 'Nom complet *', namePh: 'Prénom Nom', phone: 'Téléphone *', email: 'E-mail (suivi de commande)',
      address: 'Adresse *', addressPh: 'N° et rue', city: 'Ville *', zip: 'Code postal', country: 'Pays *', qty: 'Quantité',
      qtyOpt: (n, x) => `${n} robot${n > 1 ? 's' : ''} — ${x}`,
      payment: 'Mode de paiement', cod: '💶 À la livraison', card: '💳 Carte bancaire',
      submit: 'Confirmer ma commande ✅', processing: 'Traitement…',
      okCod: (id, t) => `✅ Merci ! Commande ${id} confirmée (${t}, paiement à la livraison). Nous vous contactons sous 24h pour valider l'expédition.`,
      okCard: (id) => `✅ Commande ${id} enregistrée ! Vous réglerez à la livraison.`,
      error: 'Erreur, réessayez.',
      secure: '🔒 Données protégées — utilisées uniquement pour votre livraison.',
      countries: { France: 'France', Belgique: 'Belgique', Espagne: 'Espagne', Italie: 'Italie', 'Pays-Bas': 'Pays-Bas', Pologne: 'Pologne' },
    },
    footer: {
      info: 'Informations', infoTxt: ['Livraison 7-14 jours', 'Retours sous 14 jours', 'Garantie légale 2 ans'],
      pay: 'Paiement', payTxt: ['Carte bancaire (sécurisé)', 'Paiement à la livraison'],
      company: 'SMARTROBOTMO LTD — société enregistrée en Angleterre & Pays de Galles.',
    },
    sticky: '🤖 Commander — 59,90 € livraison offerte',
  },

  es: {
    announce: '🚚 Envío GRATIS a Francia, Bélgica, España, Italia, Países Bajos y Polonia — Oferta de lanzamiento −25%',
    headerCta: 'Pedir',
    hero: {
      h1: ['El robot que obedece a ', 'un gesto de la mano', '.'],
      sub: 'SmartBot One son 32 cm de inteligencia: camina, baila, habla, se ilumina y se programa. El regalo que deja sin aliento — y que entretiene a los niños durante horas.',
      badges: ['✋ Control por gestos', '🕺 Modo baile', '🧠 50 acciones programables', '🎙️ Grabadora de voz', '💡 LED inmersivos'],
      cta: 'Lo pido — envío gratis',
      note: '✅ Pago contra reembolso disponible · 📦 Salida en 24-48h · 🔁 Devolución 14 días',
      float: '⭐ 4,8/5 — nota media de los primeros clientes',
      imgAlt: 'SmartBot One — robot humanoide inteligente de 32 cm',
    },
    benefits: {
      title: 'Por qué los niños (y los padres) lo adoran',
      sub: 'Un verdadero robot compañero, no un juguete más olvidado en el armario.',
      items: [
        ['✋', 'Obedece a los gestos', 'Un movimiento de la mano y avanza, retrocede, gira. Efecto mágico garantizado desde la primera demo.'],
        ['🧠', 'Enseña a programar', 'Hasta 50 acciones programables en secuencia: una iniciación lúdica a la lógica y la programación.'],
        ['🕺', 'Baila y canta', 'Modos baile, música, cuentos y grabación de voz: reproduce la voz de tu hijo.'],
        ['🔋', 'Listo para jugar', 'Batería recargable USB incluida, visera y torso LED, articulaciones móviles. De 5 a 12 años.'],
      ],
    },
    gallery: { title: 'SmartBot One en acción', sub: 'Visera LED animada, torso luminoso, mando ergonómico — 32 cm de presencia.' },
    reviewsSec: { title: 'Ya lo han adoptado', sub: 'Opiniones de los primeros clientes del SmartBot One.', note: 'Opiniones de los primeros compradores (fuente del proveedor verificada, nota media 4,8/5).' },
    offer: {
      title: 'Oferta de lanzamiento',
      list: ['SmartBot One (32 cm) + mando', 'Batería recargable USB incluida', 'Envío gratis con seguimiento (7-14 días)', 'Pago contra reembolso disponible', 'Devoluciones gratis en 14 días'],
      cta: 'Aprovechar la oferta −25%',
    },
    faq: {
      title: 'Preguntas frecuentes', sub: 'Todo lo que hay que saber antes de pedir.',
      items: [
        ['¿Para qué edad es adecuado?', 'SmartBot One se recomienda de 5 a 12 años (norma CE, no apto para menores de 36 meses). Los pequeños adoran el baile y las luces, los mayores la programación.'],
        ['¿Cuáles son los plazos de entrega?', 'Salida en 24-48h, entrega con seguimiento en 7-14 días laborables en Francia, Bélgica, España, Italia, Países Bajos y Polonia. Recibirás un número de seguimiento por e-mail.'],
        ['¿Cómo funciona el pago?', 'Puedes pagar con tarjeta (pago seguro) o elegir contra reembolso: solo pagas al recibir el paquete.'],
        ['¿La batería está incluida?', 'Sí, el robot integra una batería recargable por USB (cable incluido). El mando necesita 2 pilas AA (no incluidas).'],
        ['¿Y si el robot no gusta?', 'Dispones de 14 días tras la recepción para cambiar de opinión, conforme al derecho europeo de desistimiento. El reembolso es íntegro.'],
      ],
    },
    order: { title: 'Pide tu SmartBot One', sub: 'Stock limitado para la oferta de lanzamiento — salida en 24-48h.' },
    form: {
      title: '🤖 SmartBot One — 59,90 €', freeShip: '(envío gratis)',
      name: 'Nombre completo *', namePh: 'Nombre y apellidos', phone: 'Teléfono *', email: 'E-mail (seguimiento del pedido)',
      address: 'Dirección *', addressPh: 'Calle y número', city: 'Ciudad *', zip: 'Código postal', country: 'País *', qty: 'Cantidad',
      qtyOpt: (n, x) => `${n} robot${n > 1 ? 's' : ''} — ${x}`,
      payment: 'Forma de pago', cod: '💶 Contra reembolso', card: '💳 Tarjeta',
      submit: 'Confirmar mi pedido ✅', processing: 'Procesando…',
      okCod: (id, t) => `✅ ¡Gracias! Pedido ${id} confirmado (${t}, contra reembolso). Te contactamos en 24h para validar el envío.`,
      okCard: (id) => `✅ ¡Pedido ${id} registrado! Pagarás a la entrega.`,
      error: 'Error, inténtalo de nuevo.',
      secure: '🔒 Datos protegidos — usados solo para tu entrega.',
      countries: { France: 'Francia', Belgique: 'Bélgica', Espagne: 'España', Italie: 'Italia', 'Pays-Bas': 'Países Bajos', Pologne: 'Polonia' },
    },
    footer: {
      info: 'Información', infoTxt: ['Entrega 7-14 días', 'Devoluciones en 14 días', 'Garantía legal 2 años'],
      pay: 'Pago', payTxt: ['Tarjeta (seguro)', 'Contra reembolso'],
      company: 'SMARTROBOTMO LTD — sociedad registrada en Inglaterra y Gales.',
    },
    sticky: '🤖 Pedir — 59,90 € envío gratis',
  },

  it: {
    announce: '🚚 Spedizione GRATUITA in Francia, Belgio, Spagna, Italia, Paesi Bassi e Polonia — Offerta di lancio −25%',
    headerCta: 'Ordina',
    hero: {
      h1: ['Il robot che obbedisce a ', 'un gesto della mano', '.'],
      sub: 'SmartBot One: 32 cm di intelligenza. Cammina, balla, parla, si illumina e si programma. Il regalo che toglie il fiato — e che tiene occupati i bambini per ore.',
      badges: ['✋ Controllo gestuale', '🕺 Modalità ballo', '🧠 50 azioni programmabili', '🎙️ Registratore vocale', '💡 LED immersivi'],
      cta: 'Ordino — spedizione gratuita',
      note: '✅ Pagamento alla consegna disponibile · 📦 Partenza in 24-48h · 🔁 Reso 14 giorni',
      float: '⭐ 4,8/5 — voto medio dei primi clienti',
      imgAlt: 'SmartBot One — robot umanoide intelligente di 32 cm',
    },
    benefits: {
      title: 'Perché i bambini (e i genitori) lo adorano',
      sub: 'Un vero robot compagno, non un giocattolo in più in fondo all\'armadio.',
      items: [
        ['✋', 'Obbedisce ai gesti', 'Un movimento della mano e avanza, indietreggia, gira. Effetto magico garantito dalla prima demo.'],
        ['🧠', 'Insegna a programmare', 'Fino a 50 azioni programmabili in sequenza: un\'iniziazione giocosa alla logica e alla programmazione.'],
        ['🕺', 'Balla e canta', 'Modalità ballo, musica, storie e registrazione vocale: riproduce la voce di tuo figlio.'],
        ['🔋', 'Pronto a giocare', 'Batteria ricaricabile USB inclusa, visiera e torso LED, articolazioni mobili. Dai 5 ai 12 anni.'],
      ],
    },
    gallery: { title: 'SmartBot One in azione', sub: 'Visiera LED animata, torso luminoso, telecomando ergonomico — 32 cm di presenza.' },
    reviewsSec: { title: 'Lo hanno già adottato', sub: 'Recensioni dei primi clienti dello SmartBot One.', note: 'Recensioni dei primi acquirenti (fonte fornitore verificata, voto medio 4,8/5).' },
    offer: {
      title: 'Offerta di lancio',
      list: ['SmartBot One (32 cm) + telecomando', 'Batteria ricaricabile USB inclusa', 'Spedizione gratuita e tracciata (7-14 giorni)', 'Pagamento alla consegna disponibile', 'Resi gratuiti entro 14 giorni'],
      cta: 'Approfitta dell\'offerta −25%',
    },
    faq: {
      title: 'Domande frequenti', sub: 'Tutto quello che c\'è da sapere prima di ordinare.',
      items: [
        ['Per quale età è adatto?', 'SmartBot One è consigliato dai 5 ai 12 anni (norma CE, non adatto sotto i 36 mesi). I più piccoli adorano ballo e luci, i più grandi la programmazione.'],
        ['Quali sono i tempi di consegna?', 'Partenza in 24-48h, consegna tracciata in 7-14 giorni lavorativi in Francia, Belgio, Spagna, Italia, Paesi Bassi e Polonia. Riceverai un numero di tracking via e-mail.'],
        ['Come funziona il pagamento?', 'Puoi pagare con carta (pagamento sicuro) o scegliere il pagamento alla consegna: paghi solo al ricevimento del pacco.'],
        ['La batteria è inclusa?', 'Sì, il robot integra una batteria ricaricabile via USB (cavo incluso). Il telecomando richiede 2 pile AA (non incluse).'],
        ['E se il robot non piace?', 'Hai 14 giorni dal ricevimento per cambiare idea, secondo il diritto europeo di recesso. Il rimborso è totale.'],
      ],
    },
    order: { title: 'Ordina il tuo SmartBot One', sub: 'Stock limitato per l\'offerta di lancio — partenza in 24-48h.' },
    form: {
      title: '🤖 SmartBot One — 59,90 €', freeShip: '(spedizione gratuita)',
      name: 'Nome completo *', namePh: 'Nome e cognome', phone: 'Telefono *', email: 'E-mail (tracking ordine)',
      address: 'Indirizzo *', addressPh: 'Via e numero', city: 'Città *', zip: 'CAP', country: 'Paese *', qty: 'Quantità',
      qtyOpt: (n, x) => `${n} robot — ${x}`,
      payment: 'Metodo di pagamento', cod: '💶 Alla consegna', card: '💳 Carta',
      submit: 'Conferma il mio ordine ✅', processing: 'Elaborazione…',
      okCod: (id, t) => `✅ Grazie! Ordine ${id} confermato (${t}, pagamento alla consegna). Ti contattiamo entro 24h per convalidare la spedizione.`,
      okCard: (id) => `✅ Ordine ${id} registrato! Pagherai alla consegna.`,
      error: 'Errore, riprova.',
      secure: '🔒 Dati protetti — usati solo per la tua consegna.',
      countries: { France: 'Francia', Belgique: 'Belgio', Espagne: 'Spagna', Italie: 'Italia', 'Pays-Bas': 'Paesi Bassi', Pologne: 'Polonia' },
    },
    footer: {
      info: 'Informazioni', infoTxt: ['Consegna 7-14 giorni', 'Resi entro 14 giorni', 'Garanzia legale 2 anni'],
      pay: 'Pagamento', payTxt: ['Carta (sicuro)', 'Alla consegna'],
      company: 'SMARTROBOTMO LTD — società registrata in Inghilterra e Galles.',
    },
    sticky: '🤖 Ordina — 59,90 € spedizione gratuita',
  },

  nl: {
    announce: '🚚 GRATIS verzending naar Frankrijk, België, Spanje, Italië, Nederland en Polen — Lanceeraanbieding −25%',
    headerCta: 'Bestellen',
    hero: {
      h1: ['De robot die gehoorzaamt aan ', 'een handgebaar', '.'],
      sub: 'SmartBot One is 32 cm intelligentie: hij loopt, danst, praat, licht op en is programmeerbaar. Het cadeau dat de adem beneemt — en kinderen urenlang bezighoudt.',
      badges: ['✋ Gebarenbesturing', '🕺 Dansmodus', '🧠 50 programmeerbare acties', '🎙️ Spraakrecorder', '💡 Meeslepende LED\'s'],
      cta: 'Ik bestel — gratis verzending',
      note: '✅ Betalen bij levering mogelijk · 📦 Verzending in 24-48u · 🔁 14 dagen retour',
      float: '⭐ 4,8/5 — gemiddelde score van de eerste klanten',
      imgAlt: 'SmartBot One — slimme humanoïde robot van 32 cm',
    },
    benefits: {
      title: 'Waarom kinderen (en ouders) er dol op zijn',
      sub: 'Een echte robotmaatje, geen zoveelste speeltje achterin de kast.',
      items: [
        ['✋', 'Hij gehoorzaamt gebaren', 'Eén handbeweging en hij gaat vooruit, achteruit, draait. Magisch effect gegarandeerd vanaf de eerste demo.'],
        ['🧠', 'Hij leert programmeren', 'Tot 50 programmeerbare acties op rij: een speelse kennismaking met logica en programmeren.'],
        ['🕺', 'Hij danst en zingt', 'Dans-, muziek- en verhaalmodus plus spraakopname: hij speelt de stem van je kind af.'],
        ['🔋', 'Klaar om te spelen', 'Oplaadbare USB-batterij inbegrepen, LED-vizier en -torso, beweegbare gewrichten. Van 5 tot 12 jaar.'],
      ],
    },
    gallery: { title: 'SmartBot One in actie', sub: 'Geanimeerd LED-vizier, lichtgevend torso, ergonomische afstandsbediening — 32 cm aanwezigheid.' },
    reviewsSec: { title: 'Zij gingen je voor', sub: 'Reacties van de eerste SmartBot One-klanten.', note: 'Reviews van de eerste kopers (geverifieerde leveranciersbron, gemiddeld 4,8/5).' },
    offer: {
      title: 'Lanceeraanbieding',
      list: ['SmartBot One (32 cm) + afstandsbediening', 'Oplaadbare USB-batterij inbegrepen', 'Gratis verzending met tracking (7-14 dagen)', 'Betalen bij levering mogelijk', 'Gratis retour binnen 14 dagen'],
      cta: 'Profiteer van de aanbieding −25%',
    },
    faq: {
      title: 'Veelgestelde vragen', sub: 'Alles wat je moet weten voordat je bestelt.',
      items: [
        ['Voor welke leeftijd is hij geschikt?', 'SmartBot One wordt aanbevolen van 5 tot 12 jaar (CE-norm, niet geschikt onder 36 maanden). De jongsten zijn dol op het dansen en de lichtjes, de oudsten op het programmeren.'],
        ['Wat zijn de levertijden?', 'Verzending binnen 24-48u, levering met tracking in 7-14 werkdagen in Frankrijk, België, Spanje, Italië, Nederland en Polen. Je ontvangt een trackingnummer per e-mail.'],
        ['Hoe werkt de betaling?', 'Je kunt met kaart betalen (beveiligd) of kiezen voor betalen bij levering: je betaalt pas bij ontvangst van het pakket.'],
        ['Is de batterij inbegrepen?', 'Ja, de robot heeft een oplaadbare USB-batterij (kabel meegeleverd). De afstandsbediening werkt op 2 AA-batterijen (niet inbegrepen).'],
        ['Wat als de robot niet bevalt?', 'Je hebt 14 dagen na ontvangst om van gedachten te veranderen, volgens het Europese herroepingsrecht. Volledige terugbetaling.'],
      ],
    },
    order: { title: 'Bestel je SmartBot One', sub: 'Beperkte voorraad voor de lanceeraanbieding — verzending in 24-48u.' },
    form: {
      title: '🤖 SmartBot One — € 59,90', freeShip: '(gratis verzending)',
      name: 'Volledige naam *', namePh: 'Voor- en achternaam', phone: 'Telefoon *', email: 'E-mail (ordertracking)',
      address: 'Adres *', addressPh: 'Straat en nummer', city: 'Stad *', zip: 'Postcode', country: 'Land *', qty: 'Aantal',
      qtyOpt: (n, x) => `${n} robot${n > 1 ? 's' : ''} — ${x}`,
      payment: 'Betaalmethode', cod: '💶 Bij levering', card: '💳 Kaart',
      submit: 'Bestelling bevestigen ✅', processing: 'Verwerken…',
      okCod: (id, t) => `✅ Bedankt! Bestelling ${id} bevestigd (${t}, betalen bij levering). We nemen binnen 24u contact op om de verzending te bevestigen.`,
      okCard: (id) => `✅ Bestelling ${id} geregistreerd! Je betaalt bij levering.`,
      error: 'Fout, probeer opnieuw.',
      secure: '🔒 Gegevens beschermd — alleen gebruikt voor je levering.',
      countries: { France: 'Frankrijk', Belgique: 'België', Espagne: 'Spanje', Italie: 'Italië', 'Pays-Bas': 'Nederland', Pologne: 'Polen' },
    },
    footer: {
      info: 'Informatie', infoTxt: ['Levering 7-14 dagen', 'Retour binnen 14 dagen', 'Wettelijke garantie 2 jaar'],
      pay: 'Betaling', payTxt: ['Kaart (beveiligd)', 'Bij levering'],
      company: 'SMARTROBOTMO LTD — geregistreerd in Engeland & Wales.',
    },
    sticky: '🤖 Bestellen — € 59,90 gratis verzending',
  },

  pl: {
    announce: '🚚 DARMOWA dostawa do Francji, Belgii, Hiszpanii, Włoch, Holandii i Polski — Oferta startowa −25%',
    headerCta: 'Zamów',
    hero: {
      h1: ['Robot, który słucha ', 'gestu dłoni', '.'],
      sub: 'SmartBot One to 32 cm inteligencji: chodzi, tańczy, mówi, świeci i daje się programować. Prezent, który zapiera dech — i zajmuje dzieci na całe godziny.',
      badges: ['✋ Sterowanie gestami', '🕺 Tryb tańca', '🧠 50 programowalnych akcji', '🎙️ Nagrywanie głosu', '💡 Efekty LED'],
      cta: 'Zamawiam — darmowa dostawa',
      note: '✅ Płatność przy odbiorze · 📦 Wysyłka w 24-48h · 🔁 Zwrot 14 dni',
      float: '⭐ 4,8/5 — średnia ocena pierwszych klientów',
      imgAlt: 'SmartBot One — inteligentny robot humanoidalny 32 cm',
    },
    benefits: {
      title: 'Dlaczego dzieci (i rodzice) go uwielbiają',
      sub: 'Prawdziwy robot-towarzysz, a nie kolejna zabawka na dnie szafy.',
      items: [
        ['✋', 'Słucha gestów', 'Jeden ruch dłoni i jedzie do przodu, cofa się, skręca. Magiczny efekt gwarantowany od pierwszej demonstracji.'],
        ['🧠', 'Uczy programowania', 'Do 50 programowalnych akcji w sekwencji: zabawowe wprowadzenie do logiki i programowania.'],
        ['🕺', 'Tańczy i śpiewa', 'Tryby tańca, muzyki, opowieści i nagrywania głosu: odtwarza głos Twojego dziecka.'],
        ['🔋', 'Gotowy do zabawy', 'Akumulator USB w zestawie, świecąca przyłbica i tors LED, ruchome stawy. Od 5 do 12 lat.'],
      ],
    },
    gallery: { title: 'SmartBot One w akcji', sub: 'Animowana przyłbica LED, świecący tors, ergonomiczny pilot — 32 cm robota.' },
    reviewsSec: { title: 'Oni już go mają', sub: 'Opinie pierwszych klientów SmartBot One.', note: 'Opinie pierwszych kupujących (zweryfikowane źródło dostawcy, średnia 4,8/5).' },
    offer: {
      title: 'Oferta startowa',
      list: ['SmartBot One (32 cm) + pilot', 'Akumulator USB w zestawie', 'Darmowa dostawa ze śledzeniem (7-14 dni)', 'Płatność przy odbiorze', 'Darmowe zwroty do 14 dni'],
      cta: 'Skorzystaj z oferty −25%',
    },
    faq: {
      title: 'Częste pytania', sub: 'Wszystko, co warto wiedzieć przed zamówieniem.',
      items: [
        ['Dla jakiego wieku jest odpowiedni?', 'SmartBot One polecany jest od 5 do 12 lat (norma CE, nie dla dzieci poniżej 36 miesięcy). Młodsze dzieci uwielbiają taniec i światła, starsze programowanie.'],
        ['Jakie są terminy dostawy?', 'Wysyłka w 24-48h, dostawa ze śledzeniem w 7-14 dni roboczych do Francji, Belgii, Hiszpanii, Włoch, Holandii i Polski. Numer śledzenia otrzymasz e-mailem.'],
        ['Jak działa płatność?', 'Możesz zapłacić kartą (bezpieczna płatność) albo wybrać płatność przy odbiorze: płacisz dopiero przy odbiorze paczki.'],
        ['Czy bateria jest w zestawie?', 'Tak, robot ma akumulator ładowany przez USB (kabel w zestawie). Pilot wymaga 2 baterii AA (brak w zestawie).'],
        ['A jeśli robot się nie spodoba?', 'Masz 14 dni od otrzymania na zmianę zdania, zgodnie z europejskim prawem odstąpienia. Zwrot pieniędzy jest pełny.'],
      ],
    },
    order: { title: 'Zamów swojego SmartBot One', sub: 'Ograniczony zapas w ofercie startowej — wysyłka w 24-48h.' },
    form: {
      title: '🤖 SmartBot One — 59,90 €', freeShip: '(darmowa dostawa)',
      name: 'Imię i nazwisko *', namePh: 'Imię i nazwisko', phone: 'Telefon *', email: 'E-mail (śledzenie zamówienia)',
      address: 'Adres *', addressPh: 'Ulica i numer', city: 'Miasto *', zip: 'Kod pocztowy', country: 'Kraj *', qty: 'Ilość',
      qtyOpt: (n, x) => `${n} robot${n > 1 ? 'y' : ''} — ${x}`,
      payment: 'Metoda płatności', cod: '💶 Przy odbiorze', card: '💳 Karta',
      submit: 'Potwierdzam zamówienie ✅', processing: 'Przetwarzanie…',
      okCod: (id, t) => `✅ Dziękujemy! Zamówienie ${id} potwierdzone (${t}, płatność przy odbiorze). Skontaktujemy się w ciągu 24h, aby potwierdzić wysyłkę.`,
      okCard: (id) => `✅ Zamówienie ${id} zarejestrowane! Zapłacisz przy odbiorze.`,
      error: 'Błąd, spróbuj ponownie.',
      secure: '🔒 Dane chronione — używane wyłącznie do dostawy.',
      countries: { France: 'Francja', Belgique: 'Belgia', Espagne: 'Hiszpania', Italie: 'Włochy', 'Pays-Bas': 'Holandia', Pologne: 'Polska' },
    },
    footer: {
      info: 'Informacje', infoTxt: ['Dostawa 7-14 dni', 'Zwroty do 14 dni', 'Gwarancja prawna 2 lata'],
      pay: 'Płatność', payTxt: ['Karta (bezpiecznie)', 'Przy odbiorze'],
      company: 'SMARTROBOTMO LTD — spółka zarejestrowana w Anglii i Walii.',
    },
    sticky: '🤖 Zamów — 59,90 € darmowa dostawa',
  },
};

export function detectLang() {
  if (typeof window === 'undefined') return 'fr';
  const saved = localStorage.getItem('srm_lang');
  if (saved && UI[saved]) return saved;
  const url = new URLSearchParams(window.location.search).get('lang');
  if (url && UI[url]) return url;
  const nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
  return UI[nav] ? nav : 'fr';
}
