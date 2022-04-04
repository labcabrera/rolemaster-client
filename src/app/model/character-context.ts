import { Metadata } from "./metadata";

export interface TacticalCharacterContext {
    id: string;
    tacticalSessionId: string;
    name: string;
    characterId: string;
    isNpc: boolean;
    metadata: Metadata
}