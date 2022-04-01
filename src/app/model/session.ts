import { Metadata } from "./metadata";

export interface StrategicSession {
    id: string;
    name: string;
    description: string;
    universeId: string;
    metadata: Metadata
}

export interface TacticalSession {
    id: string;
    strategicSessionId: string;
    name: string;
    description: string;
    metadata: Metadata;
}

export interface SessionCreationRequest {
    name: string;
}