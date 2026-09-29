import assert from "node:assert/strict";
import { test } from "node:test";
import { greet } from "../src/greet.js";

test("greet saluda", () => {
  assert.equal(greet(" Ana "), "Hola, Ana");
});
