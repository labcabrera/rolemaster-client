export interface TacticalAction {
    id: string;
    type: string;
    priority: string;
    actionPercent: number;
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

export interface TacticalActionDelete {
    source: string;
    priority: string;
}