export interface Profession {
    id: string;
    name: string;
    availableRealms: string[];
    skillCategoryDevelopmentCost: any;
    skillCategoryBonus: any;
    skillCategoryWeaponDevelopmentCost: number[][];
    
}