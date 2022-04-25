export interface Item {
    id: string;
    name: string;
    type: string;
    description: string;
    count: number;
    craftDuration: number;
    //TODO
    commonCost: any;
    commonWeight: any;
}

export interface CharacterItem {
    id: string;
    characterId: string;
    itemId: string;
    type: string;
    armorType: string;
    name: string;
    position: string;
    weight: number;
    count: number;
    broken: boolean;
    features: ItemFeature[]
}

export interface AddCharacterItem {
    itemId: string;
    position: string;
    weight: number;
}

export interface ItemFeature {
    type: string;
    value: string;
}