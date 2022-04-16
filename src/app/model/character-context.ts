import { Metadata } from "./metadata";

export interface TacticalCharacterContext {
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
    combatStatus: CombatStatus;
    modifiers: ContextCharacterModifiers;
    armor: number;
    defensiveBonus: number;
    metadata: Metadata
}

export interface Hp {
    max: number;
    current: number;
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
    stunnedRounds: number;
    unconsciousRounds: number;
    canNotParryRounds: number;
    mustParryRounds: number;
    reloadingActivityPercent: number;
    surprised: number;
    bleeding: Bleeding[];
    penalty: Penalty;
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

export interface Items {
    mainWeaponEquippedId: string;
    secondaryWeaponEquippedId: string;
    armorEquippedId: string;
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