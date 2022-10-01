import SkillTest from "../models/SkillTest";

test('roll results are sane', () => {
    let successes = 0;

    for (let i = 0; i < 10000; i++) {
        successes += new SkillTest(1, false, 1, 0, 1).doesPass
            ? 1
            : 0;
    }

    const expectedResult = 9;//(1 / 20) * 100;
    expect(successes / 100).toBeGreaterThan(expectedResult - 1);
    expect(successes / 100).toBeLessThan(expectedResult + 1);
});

test('quantity scales probability', () => {
    let successes = 0;

    for (let i = 0; i < 10000; i++) {
        successes += new SkillTest(10, false, 1, 0, 10).doesPass
            ? 1
            : 0;
    }

    const expectedResult = (1 / 20) * 100;
    expect(successes / 100).toBeGreaterThan(expectedResult - 1);
    expect(successes / 100).toBeLessThan(expectedResult + 1);
});

test('complications are sane', () => {
    let successes = 0;

    for (let i = 0; i < 10000; i++) {
        successes += new SkillTest(1, false, 1, 0, 1).complications
            ? 1
            : 0;
    }

    const expectedResult = (1 / 20) * 100;
    expect(successes / 100).toBeGreaterThan(expectedResult - 1);
    expect(successes / 100).toBeLessThan(expectedResult + 1);
});
