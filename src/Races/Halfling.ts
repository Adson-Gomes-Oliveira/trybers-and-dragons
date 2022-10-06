import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Race._count = [...Race._count, {
      name,
      dexterity,
      race: 'Halfling',
    }];
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    const instancesQuantity = this._count
      .filter((inst) => inst.race === 'Halfling');

    return instancesQuantity.length;
  }
}

export default Halfling;
