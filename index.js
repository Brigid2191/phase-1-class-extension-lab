// Base class: Polygon
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Count number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Calculate perimeter (sum of all sides)
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  // Triangle class inherits from Polygon
  class Triangle extends Polygon {
    // Check if the three sides form a valid triangle
    get isValid() {
      if (this.countSides !== 3) return false;
      
      const [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
  
  // Square class inherits from Polygon
  class Square extends Polygon {
    // Check if all four sides are equal (valid square)
    get isValid() {
      if (this.countSides !== 4) return false;
      return this.sides.every(side => side === this.sides[0]);
    }
  
    // Calculate area of the square
    get area() {
      return this.isValid ? this.sides[0] ** 2 : undefined;
    }
  }
  
  // Testing
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.isValid); // true
  console.log(triangle.perimeter); // 12
  
  const invalidTriangle = new Triangle([1, 2, 3]);
  console.log(invalidTriangle.isValid); // false
  
  const square = new Square([4, 4, 4, 4]);
  console.log(square.isValid); // true
  console.log(square.area); // 16
  console.log(square.perimeter); // 16
  
  const invalidSquare = new Square([2, 3, 2, 2]);
  console.log(invalidSquare.isValid); // false
  
  module.exports = { Polygon, Triangle, Square };
  