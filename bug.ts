function calculateArea(shape: string, width: number, height: number): number {
  switch (shape) {
    case "rectangle":
      return width * height;
    case "triangle":
      return 0.5 * width * height;
    default:
      throw new Error("Invalid shape");
  }
}

console.log(calculateArea("rectangle", 10, 20)); // 200
console.log(calculateArea("triangle", 10, 20)); // 100
console.log(calculateArea("circle", 10, 20)); // Error: Invalid shape