import { test, expect } from "vitest"
import { removeMurdered } from "./main.js"


// Test 1
test("1 - should remove the murdered faithful from the array", () => {
    // Arrange
    // Variables - an array of faithfuls and a string representing the murdered faithful
    const faithfuls = ["Leanne", "Livi", "Tyler", "Kas", "Jake"]
    const murdered = "Livi"
// Act
// Pass the variables to the removedMurdered function with the array and the murdered faithful
const result = removeMurdered(faithfuls, murdered)
// Assert
// Should return the array without the murdered faithful if the murdered is in the array
expect(result).toStrictEqual(["Leanne", "Tyler", "Kas", "Jake"])
});

// Test 2
test("2 - should handle arrays with null values", () => {
    // Arrange
    // Variables - an array of faithfuls and a string representing the murdered faithful
    const faithfuls = ["Leanne", "Livi", "Tyler", null, "Kas", "Jake"]
    const murdered = null
    // Act
    // Pass the variables to the removedMurdered function with the array and the murdered
    const result = removeMurdered(faithfuls, murdered)
    // Assert
    // Should return the array without the null value
    expect(result).toStrictEqual(["Leanne", "Livi", "Tyler", "Kas", "Jake"])
});

// Test 3
test("3 - should handle duplicates in an array", () => {
    // Arrange
    // Variables - an array of faithfuls and a string representing the murdered faithful
    const faithfuls = ["Leanne", "Livi", "Tyler", "Kas", "Jake", "Livi"]
    const murdered = "Livi"
    // Act
    // Pass the variables to the removedMurdered function with the array and the murdered
    const result = removeMurdered(faithfuls, murdered)
    // Assert
    // Should return the array without the murdered faithful if the murdered is in the array
    expect(result).toStrictEqual(["Leanne", "Tyler", "Kas", "Jake"])
});

// Test 4
// test("4 - should be case sensitive", () => {
//     // Arrange
//     // Variables - an array of faithfuls and a string representing the murdered faithful
//     const faithfuls = ["Leanne", "LIVI", "Tyler", "Kas", "Jake"]
//     const murdered = "livi"
//     // Act
//     // Pass the variables to the removedMurdered function with the array and the murdered
//     const result = removeMurdered(faithfuls, murdered)
//     // Assert
//     // Should return the array without the murdered faithful if the murdered is in the array
//     expect(result).toStrictEqual(["Leanne", "Tyler", "Kas", "Jake"])
// });