export function formatNumberWithSpaces(nb: number | string) {
  return nb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function addFractionalPart(nb: number | string) {
  // Convert nb to string if it's a number
  const numStr = typeof nb === 'number' ? nb.toString() : nb;

  // Split the number into integer and decimal parts
  const parts = numStr.split(".");
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? parts[1] : "";

  // Add zeros to make sure we have two decimal places
  if (decimalPart.length === 0) {
    decimalPart = "00";
  } else if (decimalPart.length === 1) {
    decimalPart = decimalPart + "0";
  }

  // Combine integer and decimal parts with a dot
  return `${integerPart}.${decimalPart}`;
}
export function isNumber(str: string) {
  return /^\d+$/.test(str.trim());
}

