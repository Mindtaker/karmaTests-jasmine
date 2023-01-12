import { Player } from './class';
let player = new Player();

beforeEach(() => {
  player = new Player();
});

describe('Class tests', () => {
  it('should return 80 hp if the player takes 20 damage', () => {
    const resp = player.takeDamage(20);
    expect(resp).toBe(80);
  });
  it('should return 50 hp if the player takes 50 damage', () => {
    const resp = player.takeDamage(50);
    expect(resp).toBe(50);
  });
  it('should return 0 hp if the player takes 100 or more damage', () => {
    const resp = player.takeDamage(100);
    expect(resp).toBe(0);
  });
});
