import { message } from './string';

describe('Strings tests', () => {
  it('should return a string', () => {
    const resp = message('Nicolas');
    expect(typeof resp).toBe('string');
  });
  it('should return a greeting with the name sent', () => {
    const name = 'Nicolas';
    const resp = message(name);
    expect(resp).toContain(name);
  });
});
