import { Metadata } from "./metadata";
export interface TacticalCharacter {
    id: string;
    tacticalSessionId: string;
    name: string;
    level: number;
    shortDescription: string;
    characterId: string;
    isNpc: boolean;
    hp: Hp;
    powerPoints: PowerPoints;
    exhaustionPoints: ExhaustionPoints;
    defensiveBonus: number;
    combatStatus: CombatStatus;
    modifiers: ContextCharacterModifiers;
    items: CharacterItem[];
    armor: number;
    state: string;
    metadata: Metadata
}

export interface Hp {
    max: number;
    current: number;
    percent: number;
}

export interface PowerPoints {
    max: number;
    current: number;
}

export interface ExhaustionPoints {
    max: number;
    current: number;
}

export interface CombatStatus {
    buffs: Buffs;
    debuffs: Debuffs;

    stunnedRounds: number;
    unconsciousRounds: number;
    canNotParryRounds: number;
    mustParryRounds: number;
    reloadingActivityPercent: number;
    surprised: number;
    bleeding: Bleeding[];
    penalty: Penalty;

    totalBleeding: number;
    totalPenalty: number;
    totalBonus: number;
}

export interface Buffs {
    'has-initiative': number;
}
export interface Debuffs {
    stunned: number;
    shock: number;
    'must-parry': number;
    'cant-parry': number;
    'mortal-damage': number;
    'instant-death': number;
}

export interface Bleeding {
    hp: number;
    rounds: number;
}

export interface Penalty {
    penalty: number;
    rounds: number;
}

export interface ContextCharacterModifiers {
    initiative: number;
}

export interface CharacterItem {
    id: string;
    itemId: string;
    type: string;
    armorType: string;
    position: string;
    name: string;
    bonus: number;
    count: number;
    features: string[];
    broken: boolean;
    description: string;
}

export enum Debuff {
    STUNNED = "stunned",
    DOWNED = "downed",
    PRONE = "prone",
    SURPRISED = "surprised",
    UNCONSCIOUS = "unconscious",
    CANT_PARRY = "cantParry",
    MUST_PARRY = "mustParry",
    SHOCK = "shock"
}