export type RaceTypes = 'Dwarf' | 'Elf' | 'Halfling' | 'Orc';

export interface IRace {
  name: string;
  dexterity: number;
  race?: RaceTypes;
}

abstract class Race {
  private _name: string;
  private _dexterity: number;
  static _count: IRace[] = [];

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Race;
