import { CharacterSkillCategoryListComponent } from "../character-skill-category-list/character-skill-category-list.component";

export interface CharacterInfo {
    id: string;
    name: string;
    raceId: string;
    professionId: string;
    skillCategories:  CharacterSkillCategory[];
}

export interface CharacterSkillCategory {
    categoryId: string;
    currentRank: number;
    adolescenceRank: number;
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