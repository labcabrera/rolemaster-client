export interface Spell {
    id: string,
    name: string,
    spellListId: string,
    level: number;
    type: string;
    subtype: string;
    preparation: string;
    targetType: string;
    targetModifier: string;
    durationType: string;
    durationModifier: string;
    rangeType: string;
    rangeModifier: string;
    ppMultiplier: number;
    description: string;
}

export interface SpellList {
    id: string;
    name: string;
    realm: string;
    type: string;
    description: string;
}