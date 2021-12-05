import {First} from "../../src/day-one/first";

describe("test countIncreases", () => {
    it(" should return 3 for add(1,2,3,4)", () => {
        expect(First.countIncreases([1,2,3,4])).toBe(3)
    });
});
describe("rolling window should create a sum of rolling window based on input", () => {
    it(" testing simple rolling window", () => {
        expect(First.sumOfRollingWindow([1,2,3,4],2)).toEqual([3,5,7])
    });
});