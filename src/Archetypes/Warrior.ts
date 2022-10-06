import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Archetype._count = [...Archetype._count, {
      name,
      special: this.special,
      cost: this.cost,
      archetype: 'Warrior',
    }];
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    const instanceQuantity = this._count
      .filter((inst) => inst.archetype === 'Warrior');

    return instanceQuantity.length;
  }
}

export default Warrior;
