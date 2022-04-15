import { OpenRoll } from "./commons";

export interface TacticalAction {
    id: string;
    roundId: string;
    type: string;
    state: string;
    priority: string;
    actionPercent: number;
    effectiveInitiative: number;
    source: string;
    target: string;
    pace: string;
    meleeAttackType: string;
    parry: number;
    roll: OpenRoll;
    offensiveBonus: number;
    offensiveBonusMap: Map<string,number>;
    attackResult: AttackResult;
}

export interface TacticalActionDeclaration {
    type: string;
    priority: string;
    actionPercent: number;
    source: string;
    target: string;
    pace: string;
}

export interface TacticalActionExecution {
    type: string;
    roll: OpenRoll;
    secondaryRoll: OpenRoll;
    target: string;
    secondaryTarget: string;
    facing: string;
}

export interface AttackResult {
    attackResult: number;
    weaponTableId: string;
    targetArmor: number;
    hp: number;
    critical: boolean;
    criticalResult: TacticalCriticalResult;
}

export interface TacticalCriticalResult {
    severity: string;
    type: string;
    roll: number;
	criticalTableResult: CriticalTableResult;
}

export interface CriticalTableResult {
	hp: number;
	debuffs: Debuffs;
    penalty: Penalty;
    bleeding: number;
    bonus: AttackBonus;
	specialEffect: boolean;
	hasInitiative: boolean;
	instantDeath: boolean;
	deathAfterRounds: number;
    conditionalEffects: Map<string,CriticalTableResult>;
    text: string;
    otherEffects: string[];
}

export interface Penalty {
    penalty: number;
    rounds: number;
}

export interface AttackBonus {
    bonus: number;
    rounds: number;
}

export interface AttackCriticalExecution {
    actionId: string;
    roll: number;
}

export interface Debuffs {
    stunned: number;
    shock: number;
    'must-parry': number;
    'cant-parry': number;
}