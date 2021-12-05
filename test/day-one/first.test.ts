import {First} from "../../src/day-one/first";

describe("test count function", () => {
    it("should return 3 for add(1,2,3,4)", () => {
        expect(First.countIncreases([1,2,3,4])).toBe(3)
    });
});