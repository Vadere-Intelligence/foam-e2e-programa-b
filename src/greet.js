// Saludos.
import { capitalize } from "./capitalize.js";

/** Devuelve un saludo para `name`. */
export function greet(name) {
  return `Hola, ${capitalize(String(name).trim())}`;
}
