import { test, expect } from "vitest"
import { removeMurdered } from "./main.js"

// Plan
// Test 1 - Create a function (removeMurdered) that takes in an array of faithfuls and one murdered faithful and returns the updated array without the murdered faithful.
test("should remove the murdered faithful from the array", () => {
    // Arrange
    // Variables - an array of faithfuls and a string representing the murdered faithful
    const faithfuls = ["Leanne", "Livi", "Fozia", "Maia", "Jake"]
    const murdered = "Livi"
// Act
// Pass the variables to the removedMurdered function with the array and the murdered faithful
const result = removeMurdered(faithfuls, murdered)
// Assert
// Should return the array without the murdered faithful if the murdered is in the array
expect(result).toStrictEqual(["Leanne", "Fozia", "Maia", "Jake"])
});
