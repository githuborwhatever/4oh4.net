class DieRoll {
    results: number[];

    constructor(quantity: number, sides: number) {
        const results: number[] = [];

        for (let i = 0; i < quantity; i++) {
            results.push(rollDie(sides));
        }

        this.results = results;   
    }
}

function rollDie(sides: number) : number {
    const roll: number = Math.floor(Math.random() * (sides + 1));

    return roll;
}

export default DieRoll;
