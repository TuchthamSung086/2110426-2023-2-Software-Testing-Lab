function triangleType(a, b, c) {
    // Check if the input sides are integers starting from 1 to 200
    if (!(a >= 1 && a <= 201) ||
        !(Number.isInteger(b) && b > 1 && b <= 200) ||
        !(Number.isInteger(c) && c >= 0 && c <= 200)) {
        return "Input sides must be integers starting from 1 to 200";
    }

    // Triangle Inequality: Check if any side is greater than the sum of the other two
    if (b + c < a || a + c <= b) {
        return "Not a Triangle";
    }

    // Check for triangle type
    if (a === b && b === c) {
        return "Equilateral Triangle"; // All sides equal
    } else if (a === b || b === c) {
        return "Isosceles Triangle"; // Two sides equal
    } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
        Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
        Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)) {
        return "Right Triangle";
    } else {
        return "Scalene Triangle"; // All sides different
    }
}
module.exports = triangleType;
