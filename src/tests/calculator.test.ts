import { Calculator } from "../utils/calculator/add";

describe("StringCalculator", () => {
  let calculator: ReturnType<typeof Calculator>;

  beforeEach(() => {
    calculator = Calculator();
  });

  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).toEqual({ sum: 0, delimiters: [",", "\n"] });
  });

  it("should return the same number for a single number", () => {
    expect(calculator.add("1")).toEqual({ sum: 1, delimiters: [",", "\n"] });
  });

  it("should return the sum of two numbers", () => {
    expect(calculator.add("1,5")).toEqual({ sum: 6, delimiters: [",", "\n"] });
  });

  it("should return the sum of multiple numbers with commas", () => {
    expect(calculator.add("1,2,3,4,5")).toEqual({ sum: 15, delimiters: [",", "\n"] });
  });

  it("should return the sum of numbers with newlines", () => {
    expect(calculator.add("1\n2,3")).toEqual({ sum: 6, delimiters: [",", "\n"] });
  });

  it("should handle custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toEqual({ sum: 3, delimiters: [";"] });
  });

  it("should throw an error for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrowError("Negatives are not allowed: -2");
  });

  it("should throw an error for multiple negative numbers", () => {
    expect(() => calculator.add("1,-2,-3")).toThrowError("Negatives are not allowed: -2,-3");
  });

  it("should ignore numbers greater than 1000", () => {
    expect(calculator.add("1001,2")).toEqual({ sum: 2, delimiters: [",", "\n"] });
  });

  it("should support custom delimiters with multiple characters", () => {
    expect(calculator.add("//[***]\n1***2***3")).toEqual({ sum: 6, delimiters: ["***"] });
  });

  it("should support multiple custom delimiters", () => {
    expect(calculator.add("//[;][#]\n1;2#3")).toEqual({ sum: 6, delimiters: [";", "#"] });
  });
});
