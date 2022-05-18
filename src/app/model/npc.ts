export interface Npc {
    id: string;
    name: string;
    shortDescription: string;
    level: number;
    hp: number;
    armorType: number;
    defensiveBonus: number;
    powerPoints: boolean;
    exhaustionPoints: number;
    unique: boolean;
    universeId: string;
}