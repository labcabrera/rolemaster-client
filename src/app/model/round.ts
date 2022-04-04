import { Metadata } from "./metadata";

export interface TacticalRound {
	id: string;
    tacticalSessionId: string;
	round: number;
	initiativeLoaded: false;
    actions: TacticalAction[];
    initiativeRollMap: Map<string,number>;
    initiativeModifiersMap: Map<string,number>;
    initiatives: Map<string,Map<string,number>>;
    metadata: Metadata;
}

export interface TacticalAction {
    type: string;
    percent: number;
}