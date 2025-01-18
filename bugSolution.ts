function calculateArea(shape: string, width: number, height: number): number {
  switch (shape) {
    case "rectangle":
      return width * height;
    case "triangle":
      return 0.5 * width * height;
    default:
      //Instead of throwing an error, consider returning a default value or handling this more gracefully.
      console.warn(`Unsupported shape: ${shape}. Returning 0.`);
      return 0; //Or some other suitable default value
  }
}

console.log(calculateArea("rectangle", 10, 20)); // 200
console.log(calculateArea("triangle", 10, 20)); // 100
console.log(calculateArea("circle", 10, 20)); // Warning: Unsupported shape: circle. Returning 0. 0