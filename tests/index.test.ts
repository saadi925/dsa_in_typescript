import { reverseString } from '../src/index';

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});
