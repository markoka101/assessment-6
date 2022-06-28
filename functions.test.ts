const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const shuffled = shuffleArray(arr);

    test('return an array', ()  => {
        expect(Array.isArray(shuffled)).toBeTruthy();
    });

    test('return array of same length', () => {
        expect(shuffled.length).toEqual(arr.length); 
    });

    test('have samme items', ()  => {
        let con = true;

        for (const elem  of arr) {
            if (!(shuffled.includes(elem))) {
                con = false;
            }
        }

        expect(con).toBeTruthy();
    });

    test('be shuffled', () => {
        expect(shuffled).not.toEqual(arr);
    });
});