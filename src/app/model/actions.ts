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
    position: string;
}
