// Mayúsculas.

/** Pone en mayúscula el primer carácter de `text` y deja el resto igual. */
export function capitalize(text) {
  const value = String(text);
  return value.charAt(0).toUpperCase() + value.slice(1);
}
