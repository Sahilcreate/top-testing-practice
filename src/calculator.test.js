import calculator from "./calculator";

//Tests for 'add' method of Calculator object

test("add 2 & 3", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("add 5 & 6", () => {
  expect(calculator.add(5, 6)).toBe(11);
});

test("add 2 & 11", () => {
  expect(calculator.add(2, 11)).toBe(13);
});

test("add 2 & '3'", () => {
  expect(calculator.add(2, "3")).toBe(5);
});

test("add '2' & '-3'", () => {
  expect(calculator.add("2", "-3")).toBe(-1);
});

test("add 2 & 3.78", () => {
  expect(calculator.add(2, 3.78)).toBeCloseTo(5.78);
});

test("add 2 & 'hell'", () => {
  expect(() => calculator.add(2, "hell")).toThrow(
    "Inputs should only be numbers."
  );
});

//Tests for 'subtract' method of Calculator object
test("subtract 2 & 3", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("subtract 5 & 3", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("subtract 10 & 2", () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});

test("subtract '2' & '-3'", () => {
  expect(calculator.subtract("2", "-3")).toBe(5);
});

test("subtract 10.5 & 3.2", () => {
  expect(calculator.subtract(10.5, 3.2)).toBeCloseTo(7.3);
});

test("subtract 2 & 'hell'", () => {
  expect(() => calculator.subtract(2, "hell")).toThrow(
    "Inputs should only be numbers."
  );
});

//Tests for 'Divide' method of Calculator object
test("divide 4 by 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("divide 3 by 1", () => {
  expect(calculator.divide(3, 1)).toBe(3);
});

test("divide 10 by 2", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divide -10 by 2", () => {
  expect(calculator.divide(-10, 2)).toBe(-5);
});

test("divide -15 by -3", () => {
  expect(calculator.divide(-15, -3)).toBe(5);
});

test("divide 10 by 3", () => {
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
});

test("divide '4' by 2", () => {
  expect(calculator.divide("4", 2)).toBe(2);
});

test("divide '4' by '-2'", () => {
  expect(calculator.divide("4", "-2")).toBe(-2);
});

test("divide 'hell' by 'heaven'", () => {
  expect(() => calculator.divide("hell", "heaven")).toThrow(
    "Inputs should only be numbers."
  );
});

//Tests for 'Multiply' method of Calculator object
test("multiply 4 and 2", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test("multiply 10 and 3", () => {
  expect(calculator.multiply(10, 3)).toBe(30);
});

test("multiply 5 and 3", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("multiply -13 and 3", () => {
  expect(calculator.multiply(-13, 3)).toBe(-39);
});

test("multiply '5' and '-3'", () => {
  expect(calculator.multiply("5", "-3")).toBe(-15);
});

test("multiply 'Sun' and 'Wu Kong'", () => {
  expect(() => calculator.multiply("Sun", "Wu Kong")).toThrow(
    "Inputs should only be numbers."
  );
});
