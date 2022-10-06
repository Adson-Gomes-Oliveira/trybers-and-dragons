import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Race._count = [...Race._count, {
      name,
      dexterity,
      race: 'Dwarf',
    }];
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    const instancesQuantity = this._count
      .filter((inst) => inst.race === 'Dwarf');

    return instancesQuantity.length;
  }
}

export default Dwarf;
