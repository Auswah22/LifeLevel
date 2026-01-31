export class Level1 {
    constructor() {
        this.decisions = [
            {
                text: "Start a part-time job",
                income: 100,
                consequence: "You gain experience but have less free time."
            },
            {
                text: "Spend money on a video game",
                income: 0,
                consequence: "You enjoy the game but lose savings."
            },
            {
                text: "Join a club",
                income: 0,
                consequence: "You make new friends but spend money on membership."
            }
        ];
        this.weeklyIncome = 100; // Initial income for the level
        this.consequences = [];
    }

    makeDecision(decisionIndex) {
        const decision = this.decisions[decisionIndex];
        this.consequences.push(decision.consequence);
        return decision.income;
    }

    getConsequences() {
        return this.consequences;
    }

    getWeeklyIncome() {
        return this.weeklyIncome;
    }
}