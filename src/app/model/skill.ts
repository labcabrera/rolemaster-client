
export interface Skill {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    type: string;
    loadOnNewCharacters: boolean;
    progressionType: string;
    modifiers: SkillModifier[];
    skillBonus: number;
    //attributeBonus: string[];
    //rankBonusProgression: string;
    //categoryBonusProgression: string;
}

export interface SkillModifier {
    key: string;
    modifier: number;
}
