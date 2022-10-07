import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _playerOne: Fighter;
  private _playerTwo: Fighter;

  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);

    this._playerOne = playerOne;
    this._playerTwo = playerTwo;

    this._playerOne.attack(this._playerTwo);
    this._playerTwo.attack(this._playerOne);

    console.log(this._playerOne.lifePoints);
    super.fight();
  }
}

export default PVP;
