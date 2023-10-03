import { testForAdd } from ".";

describe("Sample test",()=>{
    test("Addition",()=>{
        expect(testForAdd(2,3)).toBe(5);
    });
})