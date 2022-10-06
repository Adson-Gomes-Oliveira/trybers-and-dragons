import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Race._count = [...Race._count, {
      name,
      dexterity,
      race: 'Elf',
    }];
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    const instancesQuantity = this._count
      .filter((inst) => inst.race === 'Elf');

    return instancesQuantity.length;
  }
}

export default Elf;
