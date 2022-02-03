import { describe, expect, it } from '@jest/globals';
import { parse } from '../src/parser';

describe('parser', () => {
  it('parses a markdown file', () => {
    const input = `# hello world`;
    const parsed = parse(input);
    expect(parsed).toBe(`<h1>hello world</h1>`);
  });

  it('parses a markdown file', () => {
    const input = `# hello world`;
    const parsed = parse(input);
    expect(parsed).toBe(`<h1>hello world</h1>`);
  });
});
