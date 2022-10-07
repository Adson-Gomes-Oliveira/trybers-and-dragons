import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);

    this._player = player;
    this._monsters = monsters;
    for (let index = 0; index < monsters.length; index += 1) {
      this._player.attack(this._monsters[index]);
      this._monsters[index].attack(this._player);
    }

    super.fight();
  }
}

export default PVE;
