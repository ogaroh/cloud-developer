// Super Simple Unit Functions

export const add = (a: number, b: number) => {
  return a + b;
};

export const divide = (a: number, b: number) => {
  if (b === 0) {
    throw new Error("div by 0");
  }

  return a / b;
};

// try creating a method "concat" to concatenate two strings
export const concat = (a: string, b: string) => {
  if (a.length === 0 || b.length === 0) {
    throw new Error("empty string");
  }

  const result = a + b;
  return result;
};
