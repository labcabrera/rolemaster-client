export interface CharacterInfo {
    id: string;
    name: string;
    raceId: string;
    professionId: string;
}

export interface CharacterCreationRequest {
    name: string;
    raceId: string;
    professionId: string;
    attributesRoll: number;
    attributes: CharacterCreationAttributes;
}

export interface CharacterCreationAttributes {
    ag: number;
    co: number;
    me: number;
    re: number;
    sd: number;
    em: number;
    in: number;
    pr: number;
    st: number;
    qu: number;
}