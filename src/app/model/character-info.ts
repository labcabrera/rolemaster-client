import { CharacterSkillCategoryListComponent } from "../character-skill-category-list/character-skill-category-list.component";

export interface CharacterInfo {
    id: string;
    name: string;
    raceId: string;
    professionId: string;
    attributes: CharacterAttributes;
    skillCategories:  CharacterSkillCategory[];
    skills: CharacterSkill[];
}

export interface CharacterAttributes {
    ag: CharacterAttribute;
    co: CharacterAttribute;
    me: CharacterAttribute;
    re: CharacterAttribute;
    sd: CharacterAttribute;
    em: CharacterAttribute;
    in: CharacterAttribute;
    pr: CharacterAttribute;
    st: CharacterAttribute;
    qu: CharacterAttribute;
}

export interface CharacterAttribute {
    currentValue: number;
    potentialValue: number;
    baseBonus: number;
    racialBonus: number;
    specialBonus: number;
    totalBonus: number;
}
export interface CharacterSkillCategory {
    categoryId: string;
    currentRank: number;
    adolescenceRank: number;
}

export interface CharacterSkill {
    skillId: number;
    adolescenceRanks: number;
    upgradedRanks: number;
    attributeBonus: number;
    defaultSkillBonus: number;
    totalBonus: number;
}

export interface CharacterCreationRequest {
    name: string;
    raceId: string;
    professionId: string;
    realmId: string;
    attributesRoll: number;
    baseAttributes: CharacterCreationAttributes;
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