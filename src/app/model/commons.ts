export interface OpenRoll {
    result: number;
    rolls: number[];
}

export interface Universe {
    id: string;
    name: string;
}

export interface NamedKey {
    key: string;
    name: string;
}

export interface Language {
    id: string;
    name: string;
    universeId: string;
    description: string;
}