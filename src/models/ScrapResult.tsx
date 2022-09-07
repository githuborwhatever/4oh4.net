import SkillTest from "./SkillTest";
import SmileRoll from "./SmileRoll";

class ScrapResult {
    common: number = 0;
    uncommon: number = 0;
    rare: number = 0;
    actionPoints: number = 0;
    complications: number = 0;

    constructor(scrapAmount: number, perkLevel: number, attributeValue: number, skillValue: number) {
        let successfulScraps: number = 0 ;

        for (let i = 0; i < scrapAmount; i++) {
            const useActionPoints: number = this.getActionPointsToConsume()
            this.actionPoints -= useActionPoints;

            const {
                successes, 
                critSuccesses, 
                complications, 
                actionPoints
            } = new SkillTest(2 + useActionPoints, true, attributeValue, skillValue, 0);

            successfulScraps += successes + (critSuccesses * 2);
            this.complications += complications;
            this.actionPoints += actionPoints;
        }

        const {totalSmiles, totalEffects} = this.getTotalSmileResults(successfulScraps);

        this.common = totalSmiles;

        this.uncommon = (perkLevel > 0) 
            ? totalEffects
            : 0;

        this.rare = (perkLevel > 1) 
            ? Math.floor(totalEffects / 2) 
            : 0;
    }

    getTotalSmileResults(scraps: number) {
        let totalSmiles: number = 0,
            totalEffects: number = 0;
            
        for (let j = 0; j < scraps; j++) {
            const {smiles, effects} = new SmileRoll(1);

            totalSmiles += smiles;
            totalEffects += effects;
        }

        return { totalSmiles, totalEffects };
    }

    getActionPointsToConsume(): number {
        let useActionPoints: number = 0;

        if (this.actionPoints > 2) {
            useActionPoints = 3;
        } else if (this.actionPoints > 1) {
            useActionPoints = 2;
        } else if (this.actionPoints === 1) {
            useActionPoints = 1;
        }

        return useActionPoints;
    }
}

export default ScrapResult;
