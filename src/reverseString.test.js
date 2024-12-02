import reverseString from "./reverseString";

test("reverse 'this'", () => {
  const input = "this";
  expect(reverseString(input)).toMatch("siht");
});

test("reverse 'that'", () => {
  const input = "that";
  expect(reverseString(input)).toMatch("taht");
});

test("reverse 'i passed the test'", () => {
  const input = "i passed the test";
  expect(reverseString(input)).toMatch("tset eht dessap i");
});

test("reverse '8989(((    &555Ljjjf'", () => {
  const input = "8989(((    &555Ljjjf";
  expect(reverseString(input)).toMatch("fjjjL555&    (((9898");
});

test("reverse null", () => {
  const input = null;
  expect(reverseString(input)).toMatch("");
});
