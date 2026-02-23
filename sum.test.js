// this is the test file for the sum.js
import sum from "./sum";

// test the sum function --> one test case

// test("sum of 1 and 2 is 3", () => {
//     expect(sum(1, 2))
//         .toBe(3);
// }); 

// for multiple test cases
describe(
    "test for the sum function ",
    () => {
        test("sum of 1 and 2 is 3", () => {
            expect(sum(1, 2))
                .toBe(3);
        });
        test("sum of -1 and 2 is 1", () => {
            expect(sum(-1, 2))
                .toBe(1);
        });
        test("sum of -1 and -2 is -3", () => {
            expect(sum(-1, -2))
                .toBe(-3);
        });
    }
)