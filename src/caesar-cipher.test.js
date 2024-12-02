import caesarCipher from "./caesar-cipher";

test("shift 'xyz' to 'abc' with shift factor 3", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});

test("shift 'xyz' to 'bcd' with shift factor 4", () => {
  expect(caesarCipher("xyz", 4)).toMatch("bcd");
});

test("shift 'xyz' to 'cde' with shift factor 5", () => {
  expect(caesarCipher("xyz", 5)).toMatch("cde");
});

test("shift 'HeLLo' to 'KhOOr' with shift factor 3", () => {
  expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

test("shift 'Hello, World!' to 'KhOOr, Zruog!' with shift factor 3", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});
