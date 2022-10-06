import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Archetype._count = [...Archetype._count, {
      name,
      special: this.special,
      cost: this.cost,
      archetype: 'Mage',
    }];
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    const instanceQuantity = this._count
      .filter((inst) => inst.archetype === 'Mage');

    return instanceQuantity.length;
  }
}

export default Mage;
