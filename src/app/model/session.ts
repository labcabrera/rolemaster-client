import { Metadata } from "./metadata";

export interface StrategicSession {
    id: string;
    name: string;
    metadata: Metadata
}

export interface TacticalSession {
    id: string;
    name: string;
    description: string;
    metadata: Metadata;
}

export interface SessionCreationRequest {
    name: string;
}