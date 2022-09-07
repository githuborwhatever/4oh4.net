import DieRoll from "./DieRoll";

class SkillTest {
    doesPass: boolean;
    successes: number;
    critSuccesses: number;
    complications: number;
    actionPoints: number;

    constructor(dice: number = 2, isTagSkill: boolean = true, attributeValue: number, skillValue: number, successesRequired: number) {
        const skillTest: number[] = new DieRoll(dice, 20).results;
        
        this.successes = skillTest.filter(roll => (roll <= (attributeValue + skillValue))).length;

        this.critSuccesses = isTagSkill 
            ? skillTest.filter(roll => roll < skillValue).length
            : skillTest.filter(roll => roll === 1).length;

        this.complications = skillTest.filter(roll => (roll === 20)).length;

        let actionPoints: number = (this.successes + this.critSuccesses) - successesRequired;

        this.actionPoints =  (actionPoints > 0) ? actionPoints : 0;
        this.doesPass = actionPoints >= 0;
    }
}

export default SkillTest;
