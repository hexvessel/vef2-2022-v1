import { describe, expect, it } from '@jest/globals';
import { parse } from '../parser';


describe('parser', () => {
    it('parses a string of numbers', () => {
      const input = `688
      904
      607
      299`;
  
      const parsed = parse(input);
  
      expect(parsed[1]).toBe(904);
    });
    it('parses a string of numbers 2', () => {
        const input = `   677
        884
        987
        458`;

        const parsed = parse(input);

        expect(parsed[3]).toBe(458);
    });

    it('parses a string of numbers 3', () => {
        const input = `123,123
        456`;

        const parsed = parse(input);

        expect(parsed[0]).toBe(456);
    });
  });