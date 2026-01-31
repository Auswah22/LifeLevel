export class PlayerStats {
    happiness: number;
    stress: number;
    savings: number;
    opportunities: number;

    constructor() {
        this.happiness = 100; // Starting happiness
        this.stress = 0;      // Starting stress
        this.savings = 0;     // Starting savings
        this.opportunities = 0; // Starting opportunities
    }

    updateHappiness(amount: number) {
        this.happiness = Math.max(0, Math.min(100, this.happiness + amount));
    }

    updateStress(amount: number) {
        this.stress = Math.max(0, this.stress + amount);
    }

    updateSavings(amount: number) {
        this.savings += amount;
    }

    updateOpportunities(amount: number) {
        this.opportunities = Math.max(0, this.opportunities + amount);
    }

    getStats() {
        return {
            happiness: this.happiness,
            stress: this.stress,
            savings: this.savings,
            opportunities: this.opportunities,
        };
    }
}