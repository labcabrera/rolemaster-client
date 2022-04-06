export interface SkillCategory {
    id: string;
    name: string;
    group: string;
    description: string;
    attributeBonus: string[];
    useRealmAttributeBonus: boolean;
    skillCategoryBonusProgression: string;
    skillBonusProgression: string;
}