import { Metadata } from "./metadata";

export interface Race {
    id: string;
    name: string;
    attributeModifiers: Map<string,number>;
    resistanceModifiers: Map<string,number>;
    adolescenceSkillCategoryRanks: Map<string,number>;
    adolescenceSkillRanks: Map<string,number>;
    bodyDevelopmentProgression: number[];
    ppDevelopmentProgression: Map<string,number[]>;
    universes: string[];
    resistanceBonus: Map<string,number>;
    metadata: Metadata;
}