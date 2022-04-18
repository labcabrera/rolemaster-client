
export interface CharacterInfo {
    id: string;
    name: string;
    raceId: string;
    professionId: string;
    level: number;
    maxLevel: number;
    age: number;
    height: number;
    weight: number;
    attributes: CharacterAttributes;
    maxHp: number;
    maxExhaustionPoints: number;
    xp: number;
    baseMovementRate: number;
    skillCategories:  CharacterSkillCategory[];
    skills: CharacterSkill[];
    developmentPoints: CharacterDevelopmentPoints;
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
    totalBonus: number;
    bonus: AttributeBonus;
}

export interface AttributeBonus {
    race: number;
    attribute: number;
    special: number;
}
export interface CharacterSkillCategory {
    categoryId: string;
    attributes: string[];
    developmentCost: number[];
    ranks: SkillRankMap;
    bonus: SkillBonusMap;
    totalRanks: number;
    totalBonus: number;
}

export interface CharacterSkill {
    skillId: number;
    categoryId: string;
    group: string;
    attributes: string[];
    developmentCost: number[];
    bonus: SkillRankMap;
    ranks: SkillBonusMap;
    totalBonus: number;
}

export interface SkillRankMap {
    adolescence: number;
    lifestyle: number;
    consolidated: number;
    development: number;
}

export interface SkillBonusMap {
    rank: number;
    attribute: number;
    profession: number;
    category: number;
}
export interface CharacterSkillBonus {
    rank: number;
    category: number;
    attribute: number;
    profession: number;
    race: number;
    skillSpecial: number;
    special: number;
}

export interface CharacterSkillRanks {
    adolescence: number;
    consolidated: number;
    development: number;
}

export interface CharacterDevelopmentPoints {
    totalPoints: number | 0;
    usedPoints: number | 0;
}

export interface CharacterCreationRequest {
    name: string;
    raceId: string;
    professionId: string;
    realmId: string;
    attributesRoll: number;
    baseAttributes: CharacterCreationAttributes;
    weaponCategoryPriority: string[];
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

export interface SkillUpgradeRequest {
    categoryRanks: Map<String,number>;
    skillRanks: Map<String,number>;
}
