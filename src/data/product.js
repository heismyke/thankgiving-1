// Single source of truth for the page content.
export const brand = 'Récolte'

// Replace with the team WhatsApp number (country code, no + or spaces).
export const whatsapp = '22900000000'

export const offer = {
  label: 'Prévente Thanksgiving',
  headline: 'La table de Thanksgiving, prête en un coffret.',
  discount: '-38 %',
  // Thanksgiving 2026, Benin time
  endsAt: '2026-11-26T00:00:00+01:00',
}

export const product = {
  name: 'Le Coffret Récolte',
  tagline:
    'Assiettes en grès, bols, serviettes en lin et plat de service. Tout ce qu’il faut pour recevoir 6 personnes, dans des tons d’automne doux.',
  oldPrice: 89000,
  price: 54900,
  stockLeft: 27,
  stockTotal: 120,
  rating: 4.9,
  reviewCount: 212,
  images: {
    hero: '/images/hero.webp',
    details: [
      { src: '/images/detail-1.webp', alt: 'Assiettes en grès couleur crème empilées' },
      { src: '/images/detail-2.webp', alt: 'Serviettes en lin couleur terracotta pliées' },
      { src: '/images/detail-3.webp', alt: 'Table de Thanksgiving dressée avec le coffret Récolte' },
    ],
  },
  includes: [
    { qty: 6, item: 'Assiettes plates en grès émaillé, 27 cm' },
    { qty: 6, item: 'Bols en grès, 15 cm' },
    { qty: 6, item: 'Serviettes en lin lavé' },
    { qty: 1, item: 'Grand plat de service ovale, 38 cm' },
    { qty: 1, item: 'Carte de vœux « Merci » à offrir' },
  ],
}

export const benefits = [
  {
    title: 'Prêt à recevoir',
    text: 'Un seul coffret pour dresser une table complète de 6 couverts. Plus besoin de tout chercher séparément.',
  },
  {
    title: 'Fait pour durer',
    text: 'Grès cuit à haute température, résistant au lave-vaisselle et au micro-ondes. Lin qui s’adoucit à chaque lavage.',
  },
  {
    title: 'Un cadeau qui marque',
    text: 'Livré dans un coffret en carton recyclé avec une carte « Merci ». Parfait à offrir à vos hôtes.',
  },
  {
    title: '38 % moins cher',
    text: 'Acheté séparément, l’ensemble coûte 89 000 FCFA. En prévente, il est à 54 900 FCFA.',
  },
]

export const reviews = [
  {
    name: 'Aïcha K.',
    city: 'Cotonou',
    rating: 5,
    text: 'Ma table n’a jamais été aussi belle. Les assiettes sont lourdes, de vraie qualité, et le lin est très doux.',
  },
  {
    name: 'Marc D.',
    city: 'Porto-Novo',
    rating: 5,
    text: 'Offert à ma mère pour le repas de famille. Emballage superbe, livré en 48 h. Je recommande.',
  },
  {
    name: 'Nadège S.',
    city: 'Abomey-Calavi',
    rating: 5,
    text: 'Simple, élégant, et tout va ensemble. J’ai reçu des compliments toute la soirée.',
  },
]

export const guarantees = [
  { title: 'Livraison 48 h', text: 'Partout au Bénin, offerte dès aujourd’hui.' },
  { title: 'Retour 30 jours', text: 'Satisfait ou remboursé, sans question.' },
  { title: 'Casse garantie', text: 'Une pièce arrive abîmée ? Nous la remplaçons.' },
  { title: 'Paiement sécurisé', text: 'Mobile Money, carte ou à la livraison.' },
]

export const faq = [
  {
    q: 'Quand vais-je recevoir mon coffret ?',
    a: 'Sous 48 h à Cotonou, Porto-Novo et Abomey-Calavi, sous 3 à 5 jours ailleurs au Bénin. Les commandes en prévente arrivent toutes avant Thanksgiving.',
  },
  {
    q: 'Puis-je payer à la livraison ?',
    a: 'Oui. Vous pouvez aussi payer par MTN MoMo, Moov Money ou carte bancaire.',
  },
  {
    q: 'Les pièces vont-elles au lave-vaisselle ?',
    a: 'Oui, le grès va au lave-vaisselle et au micro-ondes. Les serviettes en lin se lavent à 40 °C.',
  },
  {
    q: 'Et si une pièce est cassée à la livraison ?',
    a: 'Envoyez-nous une photo sur WhatsApp dans les 7 jours, nous remplaçons la pièce gratuitement.',
  },
  {
    q: 'Le prix de prévente va-t-il durer ?',
    a: 'Non. Le prix de 54 900 FCFA s’arrête à Thanksgiving ou dès que les 120 coffrets de prévente sont vendus.',
  },
]
