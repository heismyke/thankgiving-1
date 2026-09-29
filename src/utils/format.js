const number = new Intl.NumberFormat('fr-FR')

export const formatPrice = (value) => `${number.format(value)} FCFA`
