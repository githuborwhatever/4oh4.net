import DieRoll from "./DieRoll";

class SmileRoll {
    smiles: number = 0;
    effects: number = 0;

    constructor(quantity: number) {
        const numericResults: number[] = new DieRoll(quantity, 6).results;

        const singles: number = numericResults.filter(roll => roll === 4).length;
        const doubles: number = numericResults.filter(roll => roll === 5).length;

        this.effects = numericResults.filter(roll => roll === 6).length;
        this.smiles = singles + (doubles*2) + this.effects;
    }
}

export default SmileRoll;
