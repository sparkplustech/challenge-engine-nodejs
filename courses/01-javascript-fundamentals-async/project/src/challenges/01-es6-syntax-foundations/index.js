export function solve_01_es6_syntax_foundations() {
  const arrowFunction = () => {
    const numArray = [1, 2, 3];
    const [a, b, ...rest] = numArray;

    const transformed = numArray.map((num) => num * 2);

    const original = [...numArray];

    return {
      original, transformed
    };

  }
  return arrowFunction();
}