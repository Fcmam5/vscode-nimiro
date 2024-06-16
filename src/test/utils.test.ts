import * as assert from "assert";
import { formatNumberWithSpaces, isNumber } from "../utils";

suite("Utils", () => {
  test("formatNumberWithSpaces: format long numbers with spaces", () => {
    assert.strictEqual(formatNumberWithSpaces("1"), "1");
    assert.strictEqual(formatNumberWithSpaces(100000), "100 000");
    assert.strictEqual(formatNumberWithSpaces("10000000000"), "10 000 000 000");
  });

  test("isNumber", () => {
    assert.strictEqual(isNumber("hello"), false);
    assert.strictEqual(isNumber("1d"), false);
    assert.strictEqual(isNumber("10"), true);
    assert.strictEqual(isNumber(" 10 "), true);
  });
});
