import { describe, expect, it } from '@jest/globals';
import { greining } from '../greining';

describe('greining', () => {
    it('Tölfræði fyrir gagnasafn, max', () => {
        const input = [688,904,607,299];
        
        const tölfræði = greining(input);

        expect(tölfræði.max).toBe(904);
        expect(tölfræði.min).toBe(299);
        expect(tölfræði.sum).toBe(688+904+607+299);
        expect(tölfræði.median).toBe(688);
        expect(tölfræði.mean).toBe((688+904+607+299)/4);
        expect(tölfræði.stddev).toBe(250.6052673029839);
        expect(tölfræði.variance).toBe(62803);
        expect(tölfræði.range).toBe(904-299);
    });

});
