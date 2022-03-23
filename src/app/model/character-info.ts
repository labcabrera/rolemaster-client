export interface CharacterInfo {
    id: string;
    name: string;
    raceId: string;
    professionId: string;
}

export interface CharacterCreation {
    name: string;
    raceId: string;
    professionId: string;
    attributesRoll: bigint;
    attributes: CharacterCreationAttributes;
}

export interface CharacterCreationAttributes {
    ag: bigint;
    co: bigint;
    me: bigint;
    re: bigint;
    sd: bigint;
    em: bigint;
    in: bigint;
    pr: bigint;
    st: bigint;
    qu: bigint;
}