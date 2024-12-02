import capitalize from "./capitalize";

test("capitalize 'this'", () => {
  const input = "this";
  expect(capitalize(input)).toMatch("This");
});

test("capitalize 'that'", () => {
  const input = "that";
  expect(capitalize(input)).toMatch("That");
});

test("capitalize 'what'", () => {
  const input = "what";
  expect(capitalize(input)).toMatch("What");
});

test("capitalize 'this string here.'", () => {
  const input = "this string here.";
  expect(capitalize(input)).toMatch("This string here.");
});

test("capitalize '/input&^'", () => {
  const input = "/input&^";
  expect(capitalize(input)).toMatch("/input&^");
});

test("capitalize ''", () => {
  const input = "";
  expect(capitalize("")).toMatch("");
});

test("capitalize '98h'", () => {
  const input = "98h";
  expect(capitalize(input)).toMatch("98h");
});

test("capitalize null", () => {
  const input = null;
  expect(capitalize(input)).toMatch("");
});
