import { Metadata } from "./metadata";
import { TacticalAction } from "./actions";

export interface TacticalRound {
	id: string;
    tacticalSessionId: string;
    state: string;
	round: number;
	initiativeLoaded: false;
    actions: TacticalAction[];
    initiativeRollMap: Map<string,number>;
    initiativeModifiersMap: Map<string,number>;
    initiatives: Map<string,Map<string,number>>;
    metadata: Metadata;
}
