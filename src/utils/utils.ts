export function formattedPrice(price: number) {
  const numberFormatted = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return numberFormatted;
}
