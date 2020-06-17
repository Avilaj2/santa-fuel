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

    });
})