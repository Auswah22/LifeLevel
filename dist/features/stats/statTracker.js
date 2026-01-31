"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatTracker = void 0;
class StatTracker {
    constructor() {
        this.happiness = 100; // Starting happiness
        this.stress = 0; // Starting stress
        this.savings = 0; // Starting savings
        this.opportunities = 0; // Starting opportunities
    }
    updateStats(decision) {
        switch (decision) {
            case 'goodDecision':
                this.happiness += 10;
                this.stress -= 5;
                this.savings += 20;
                this.opportunities += 1;
                break;
            case 'badDecision':
                this.happiness -= 10;
                this.stress += 5;
                this.savings -= 10;
                this.opportunities -= 1;
                break;
            // Add more cases as needed for different decisions
            default:
                break;
        }
        this.happiness = Math.max(0, Math.min(100, this.happiness)); // Clamp happiness between 0 and 100
        this.stress = Math.max(0, this.stress); // Stress cannot be negative
        this.savings = Math.max(0, this.savings); // Savings cannot be negative
        this.opportunities = Math.max(0, this.opportunities); // Opportunities cannot be negative
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
exports.StatTracker = StatTracker;
