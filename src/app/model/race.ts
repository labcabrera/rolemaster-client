import { Metadata } from "./metadata";

export interface Race {
    id: string;
    name: string;
    keywords: string[];
    attributeModifiers: Map<string,number>;
    resistanceModifiers: Map<string,number>;
    adolescenceSkillCategoryRanks: any;
    adolescenceSkillRanks: any;
    bodyDevelopmentProgression: number[];
    powerPointsProgression: RacePowerPointDevelopment;
    universes: string[];
    resistanceBonus: Map<string,number>;
    exhaustionPointsBonus: number;
    backgroundOptions: number;
    metadata: Metadata;
}

export interface RacePowerPointDevelopment {
    essence: number[];
    channeling: number[];
    mentalism: number[];
}