const triangleType = require('./Triangle');

describe('triangleType function', () => {
    it('example case', () => {
        expect(triangleType(-9999, 9999, 123123)).toBe('Input sides must be integers between 1 and 200');
    });

    // Write your tests here

});