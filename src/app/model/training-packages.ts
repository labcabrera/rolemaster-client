export interface TrainingPackage {
    id: string;
    name: string;
    type: string;
    timeAcquisition: number;
    fixedSkillCategories: any;
    fixedSkills: any;
    selectableSkillCategoryList: any;
    selectableSkillList: any;
    statGains: string[];
    startingMoney: string;
    costByProfession: any;
}