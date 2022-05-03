import { Metadata } from "./metadata";

export interface Race {
    id: string;
    name: string;
    keywords: string[];
    attributeModifiers: any;
    resistanceBonus: any;
    adolescenceSkillCategoryRanks: any;
    adolescenceSkillRanks: any;
    bodyDevelopmentProgression: number[];
    powerPointsProgression: RacePowerPointDevelopment;
    universes: string[];
    exhaustionPointsBonus: number;
    backgroundOptions: number;
    soulDeparture: number;
    recoveryMultiplier: number;
    metadata: Metadata;
}

export interface RacePowerPointDevelopment {
    essence: number[];
    channeling: number[];
    mentalism: number[];
}