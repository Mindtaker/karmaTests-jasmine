import { getRobots } from './arrays';

describe('Arrays tests', () => {
  it('should return an array of at least 3 robots', () => {
    const robots = getRobots();
    expect(robots.length).toBeGreaterThanOrEqual(3);
  });
  it('should exist Megaman and Ultron', () => {
    const robots = getRobots();
    expect(robots).toContain('Megaman');
    expect(robots).toContain('Ultron');
  });
});
