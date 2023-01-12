import { PlayerTwo } from './playerTwo';

describe('PlayerTwo emit', () => {
  let player: PlayerTwo;
  beforeEach(() => {
    player = new PlayerTwo();
  });
  it('should emit an event when the player takes damage', () => {
    let eventEmitted = false;
    player.hpChange.subscribe(() => {
      eventEmitted = true;
    });
    player.takeDamage(1000);
    expect(eventEmitted).toBeTruthy();
  });
  it('should have 50 hp if the player takes 50 damage', () => {
    let newHp = 0;
    player.hpChange.subscribe((hp) => {
      newHp = hp;
    });
    player.takeDamage(50);
    expect(newHp).toBe(50);
  });
});
