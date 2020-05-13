import { add } from '.';

describe("add tests", () => {
    it("should return sum of two numbers", () => {
        expect(add(1, 2)).toBe(3);
        //  expect(add(-2,2)).toBe(0);
    });
});
