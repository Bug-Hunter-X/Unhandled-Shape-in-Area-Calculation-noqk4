# TypeScript Bug: Unhandled Shape in Area Calculation

This repository demonstrates a common error in TypeScript: insufficient handling of unexpected input values.

The `calculateArea` function calculates the area of a rectangle or triangle.  However, it lacks proper handling for shapes other than "rectangle" and "triangle".  This can lead to an error being thrown, which is good practice, but can also be improved.