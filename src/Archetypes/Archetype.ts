import { EnergyType } from '../Energy';

export type ArcheTypes = 'Mage' | 'Necromancer' | 'Ranger' | 'Warrior';

export interface IArchetype {
  name: string;
  special: number;
  cost: number;
  archetype?: ArcheTypes;
}

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  static _count: IArchetype[] = [];

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }
}

export default Archetype;
