import { OpenRoll } from "./commons";
import { Debuffs } from "./character-context";
import { AttackResultComponent } from "../components/tactical/attack-result/attack-result.component";
export interface TacticalAction {
    id: string;
    roundId: string;
    type: string;
    state: string;
    priority: string;
    actionPercent: number;
    initiative: number;
    source: string;
    targets: Targets; 
    secondaryTarget: string;
    pace: string;
    meleeAttackType: string;
    meleeAttackMode: string;
    parry: number;
    roll: OpenRoll;
    rolls: TacticalActionRolls;
    offensiveBonus: number;
    offensiveBonusMap: TacticalActionOffensiveBonusMap;
    attackResults: AttackResultMap;
    criticalResults: TacticalCriticalResultMap;
    breakageResults: BreakageResultMap;
}

export interface AttackResultMap {
    ['main-hand']: AttackResult;
    ['off-hand']: AttackResult;
}

export interface TacticalCriticalResultMap {
    ['main-hand']: TacticalCriticalResult[];
    ['off-hand']: TacticalCriticalResult[];
}

export interface Targets {
    ['main-hand']: string;
    ['off-hand']: string;
}

export interface TacticalActionRolls {
    ['main-hand']: OpenRoll;
    ['off-hand']: OpenRoll;
}

export interface TacticalActionOffensiveBonusMap {
    ['main-hand']: OffensiveBonusMap;
    ['off-hand']: OffensiveBonusMap;
}

export interface OffensiveBonusMap {
    skill: number;
    'defensive-bonus': number;
    shield: number;
    'target-status': number;
    hp: number;
    exhaustion: number;
    'action-percent': number;
    'melee-facing': number;
    parry: number;
    'distance': number;
    'off-hand': number;
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
    rolls: TacticalActionRolls,
    secondaryRoll: OpenRoll;
    target: string;
    secondaryTarget: string;
    facing: string;
}

export interface AttackResult {
    result: number;
    totalBonus: number;
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
    roll: number;
}

export interface FumbleExecution {
    roll: number;
}

export interface BreakageResultMap {
    'main-hand': BreakageResult;
    'off-hand': BreakageResult;
}
export interface BreakageResult {
    breakage: number;
    strength: number;
    roll: number;
    result: number;
    weaponBreakage: boolean
    modifiers: Map<string,number>;
}
