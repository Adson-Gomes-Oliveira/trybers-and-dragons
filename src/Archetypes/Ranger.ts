import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Archetype._count = [...Archetype._count, {
      name,
      special: this.special,
      cost: this.cost,
      archetype: 'Ranger',
    }];
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    const instanceQuantity = this._count
      .filter((inst) => inst.archetype === 'Ranger');

    return instanceQuantity.length;
  }
}

export default Ranger;
