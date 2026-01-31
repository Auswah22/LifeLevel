import { PlayerStats } from '../features/stats/playerStats';

interface AnalyticsData {
    playerId: string;
    decisions: Array<{
        decisionId: string;
        timestamp: number;
        outcome: string;
    }>;
    stats: PlayerStats;
}

class AnalyticsService {
    private analyticsData: AnalyticsData;

    constructor(playerId: string) {
        this.analyticsData = {
            playerId,
            decisions: [],
            stats: new PlayerStats(),
        };
    }

    trackDecision(decisionId: string, outcome: string): void {
        const decision = {
            decisionId,
            timestamp: Date.now(),
            outcome,
        };
        this.analyticsData.decisions.push(decision);
    }

    updateStats(newStats: PlayerStats): void {
        this.analyticsData.stats = newStats;
    }

    getAnalyticsData(): AnalyticsData {
        return this.analyticsData;
    }

    // Additional methods for saving or sending analytics data can be added here
}

export const analyticsService = new AnalyticsService('player-1');