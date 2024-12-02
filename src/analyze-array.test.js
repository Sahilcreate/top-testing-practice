import analyzeArray from "./analyze-array";

test("analyze [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("analyze [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("analyze [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("analyze [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("analyze [1,3,10,4,4]", () => {
  expect(analyzeArray([3, 3, 10, 4, 4])).toMatchObject({
    average: 4.8,
    min: 3,
    max: 10,
    length: 5,
  });
});

test("analyze [0,12,0,20,44,100]", () => {
  expect(analyzeArray([0, 12, 0, 20, 44, 100])).toMatchObject({
    average: 29.33,
    min: 0,
    max: 100,
    length: 6,
  });
});
