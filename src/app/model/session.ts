import { Metadata } from "./metadata";

export interface Session {
    id: string;
    name: string;
    metadata: Metadata
}

export interface SessionCreationRequest {
    name: string;
}