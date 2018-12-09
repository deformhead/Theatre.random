import {random} from '../sources/random.js';

import chai from 'chai';

const expect = chai.expect;

describe('#random()', function () {

    it('should return a positive integer', function () {

        for (let iterator = 0; iterator < 10; iterator += 1) {

            const items = 4;
            const result = random(items);

            expect(random(1)).to.equal(0);
            expect(result % 1 === 0).to.be.true;
            expect(result).to.be.at.least(0);
            expect(result).to.be.at.most(items - 1);
        }
    });

    it('should return an array item', function () {

        const items = ['rock', 'paper', 'scissors'];

        for (let iterator = 0; iterator < 10; iterator += 1) {

            expect(items).to.include(random(items));
        }
    });

    it('should return null when a bad input is given', function () {

        expect(random('string')).to.equal(null);
        expect(random(0.42)).to.equal(null);
        expect(random(-1)).to.equal(null);
        expect(random([])).to.equal(null);
    });
});
