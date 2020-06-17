const myFuel = require("./myFuel.js");
describe("myFuel()", () => {
    test("Should calculate myFuel mass 12 ", () => {
        expect(myFuel(12)).toBe(2)
    });

    test("Should calculate myFuel mass 14 ", () => {
        expect(myFuel(14)).toBe(2)
    });

    test("Should calculate myFuel mass 1969 ", () => {
        expect(myFuel(1969)).toBe(654)
    });

    test("Should calculate myFuel mass 100756 ", () => {
        expect(myFuel(100756)).toBe(33583)
        // 
    });
})

test("should sum up total fuel", () => {
    // 1. [x] masses [12,14,1969]
    // 2. For each mass calculate fuel, with returned fuel add it to total, once done return total

    // 2. For each Example
    // mass (12), calculate fuel (2), return fuel (2), add fuel to 0 (total), return 2
    // mass (14), calculate fuel (2), return fuel (2), add fuel to 2 (previous total) return 4
    // mass (1969), calculate fuel (654), return fuel (654), add fuel to 4 (previous total) return 658
    // [x] Once done return total (658)
    const masses = [12, 14, 1969, 100756]
    // expect(total).toBe(2)
});
// TODO: Rename myFuel

// BRAIN DUMP
// Make a variable and pass it myFuel
// Create a new variable where all my data from myFuel ends up being added up.
// Making sure all the numbers go though (arrayFuel)
// How to do the sum
// passing on the totals that myFuel gets
