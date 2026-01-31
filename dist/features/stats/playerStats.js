"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerStats = void 0;
class PlayerStats {
    constructor() {
        this.happiness = 100; // Starting happiness
        this.stress = 0; // Starting stress
        this.savings = 0; // Starting savings
        this.opportunities = 0; // Starting opportunities
    }
    updateHappiness(amount) {
        this.happiness = Math.max(0, Math.min(100, this.happiness + amount));
    }
    updateStress(amount) {
        this.stress = Math.max(0, this.stress + amount);
    }
    updateSavings(amount) {
        this.savings += amount;
    }
    updateOpportunities(amount) {
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
exports.PlayerStats = PlayerStats;
