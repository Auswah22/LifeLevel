import { PlayerStats } from "../types/index";

export class StatTracker {
  private stats: PlayerStats;

  constructor() {
    this.stats = {
      happiness: 50,
      stress: 50,
      savings: 0,
      opportunities: 0
    };
  }

  getStats(): PlayerStats {
    return { ...this.stats };
  }

  updateStats(changes: Partial<PlayerStats>): void {
    if (changes.happiness !== undefined) {
      this.stats.happiness = Math.max(0, Math.min(100, this.stats.happiness + changes.happiness));
    }
    if (changes.stress !== undefined) {
      this.stats.stress = Math.max(0, Math.min(100, this.stats.stress + changes.stress));
    }
    if (changes.savings !== undefined) {
      this.stats.savings = Math.max(0, this.stats.savings + changes.savings);
    }
    if (changes.opportunities !== undefined) {
      this.stats.opportunities = Math.max(0, this.stats.opportunities + changes.opportunities);
    }
  }

  resetStats(): void {
    this.stats = {
      happiness: 50,
      stress: 50,
      savings: 0,
      opportunities: 0
    };
  }
}