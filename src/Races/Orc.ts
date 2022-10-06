import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Race._count = [...Race._count, {
      name,
      dexterity,
      race: 'Orc',
    }];
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    const instancesQuantity = this._count
      .filter((inst) => inst.race === 'Orc');

    return instancesQuantity.length;
  }
}

export default Orc;
