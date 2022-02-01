import { describe, expect, it } from '@jest/globals';
import { reverse } from '../src/lib/reverse.js';

describe('main.js', () => {
    it('reverses a string', () => {
        const input = 'foo';
        const result = reverse(input);
        expect(result).toBe('oof');
    });
    
    it('reverses a different string', () => {
        const input = 'bar';
        const result = reverse(input);
        expect(result).toBe('rab');
    });

    it('should return undefined for undefined', () => {
        const input = undefined;
        const result = reverse(input);
        expect(result).toBe(undefined);
    });
});