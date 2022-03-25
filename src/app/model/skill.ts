
export interface Skill {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    loadOnNewCharacters: boolean;
    attributeBonus: string[];
    rankBonusProgression: string;
    categoryBonusProgression: string;
}