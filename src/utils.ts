export function formatNumberWithSpaces(nb: number | string) {
  return nb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function isNumber(str: string) {
  return /^\d+$/.test(str.trim());
}
