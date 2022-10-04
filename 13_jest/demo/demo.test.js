// run ./node_modules/jest/bin/jest.js
// run npx jest filename.test.js (file harus taroh di root/__test__)

describe("Demo Test",() => {
    test("testing toBe", () => {
        expect(1+1).toBe(2);
    })
})