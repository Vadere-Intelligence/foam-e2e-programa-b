import assert from "node:assert/strict";
import { test } from "node:test";
import { capitalize } from "../src/capitalize.js";

test("capitalize con cadena vacía", () => {
  assert.equal(capitalize(""), "");
});

test("capitalize pone en mayúscula el primer carácter", () => {
  assert.equal(capitalize("ana"), "Ana");
});

test("capitalize deja el resto sin cambios", () => {
  assert.equal(capitalize("aNA"), "ANA");
});
