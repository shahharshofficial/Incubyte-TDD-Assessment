export function Calculator() {
  const add = (numbers: string): { sum: number; delimiters: string[] } => {
    let delimiters: string[] = [",", "\n"];
    let numberString = numbers;

    if (numbers.startsWith("//")) {
      const delimiterPart = numbers.split("\n")[0];
      numberString = numbers.split("\n")[1];
      const customDelimiters = delimiterPart.match(/\[(.*?)\]/g);

      if (customDelimiters) {
        delimiters = customDelimiters.map((d) => d.slice(1, -1));
      } else {
        delimiters = [delimiterPart.slice(2)];
      }
    }

    const regex = new RegExp(
      `[${delimiters.map((d) => getRegex(d)).join("")}]`,
      "g"
    );
    const tokens = numberString.split(regex).filter((token) => token !== "");

    const negatives: number[] = [];
    let sum = 0;

    tokens.forEach((token) => {
      const num = parseInt(token, 10);
      if (num < 0) {
        negatives.push(num);
      } else if (num <= 1000) {
        sum += num;
      }
    });

    if (negatives.length > 0) {
      throw new Error(`Negatives are not allowed: ${negatives.join(",")}`);
    }

    return { sum, delimiters };
  };

  const getRegex = (delimiter: string): string =>
    delimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

  return {
    add,
  };
}
