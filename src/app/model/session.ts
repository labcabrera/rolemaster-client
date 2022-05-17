import { Metadata } from "./metadata";

export interface StrategicSession {
    id: string;
    name: string;
    version: string;
    description: string;
    universeId: string;
    metadata: Metadata;
    owner: string;
}

export interface TacticalSession {
    id: string;
    version: string;
    strategicSessionId: string;
    name: string;
    scale: number;
    terrain: string;
    temperature: string;
    exhaustionMultiplier: number;
    state: string;
    description: string;
    metadata: Metadata;
}

export interface SessionCreationRequest {
    name: string;
}

export interface TacticalSessionCreation {
    strategicSessionId: string;
    name: string;
    description: string;
}

export interface TacticalSessionUpdate {
    name: string;
    description: string;
}