"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsService = void 0;
const playerStats_1 = require("../features/stats/playerStats");
class AnalyticsService {
    constructor(playerId) {
        this.analyticsData = {
            playerId,
            decisions: [],
            stats: new playerStats_1.PlayerStats(),
        };
    }
    trackDecision(decisionId, outcome) {
        const decision = {
            decisionId,
            timestamp: Date.now(),
            outcome,
        };
        this.analyticsData.decisions.push(decision);
    }
    updateStats(newStats) {
        this.analyticsData.stats = newStats;
    }
    getAnalyticsData() {
        return this.analyticsData;
    }
}
exports.analyticsService = new AnalyticsService('player-1');
