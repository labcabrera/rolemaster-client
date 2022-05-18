import { Metadata } from "./metadata";
import { TacticalAction } from "./actions";

export interface TacticalRound {
	id: string;
    tacticalSessionId: string;
	round: number;
    actions: TacticalAction[];
    initiatives: any;
    metadata: Metadata;
}
