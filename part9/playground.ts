type Operation = "multiply" | "add" | "divide";

const calculator = (a: number, b: number, op: Operation, printText: string) => {
  if (op === "multiply") {
    return a * b;
  } else if (op === "add") {
    return a + b;
  } else if (op === "divide") {
    if (b === 0) return "can't divide by 0!";
    return a / b;
  }
};

calculator(2, 4, "add", "Multiplied numbers 2 and 4, the result is");
