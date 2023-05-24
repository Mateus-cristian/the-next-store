export function formattedPrice(price: number) {
  const numberFormatted = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return numberFormatted;
}

export function priceStringToDecimal(priceString: string) {
  // Removendo os símbolos não numéricos da string
  const priceWithoutSimbols = priceString.replace(/[^\d,.-]/g, "");

  // Convertendo a string formatada em um número decimal
  const price = parseFloat(priceWithoutSimbols.replace(",", "."));

  return price;
}
