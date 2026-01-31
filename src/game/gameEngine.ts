import { Player } from "../types/index";
import { StatTracker } from "./playerStats";
import { Wallet } from "./wallet";
import { LevelManager } from "./levelManager";

export class GameEngine {
  private player: Player;
  private statTracker: StatTracker;
  private wallet: Wallet;
  private levelManager: LevelManager;

  constructor(playerId: string, playerName: string) {
    this.statTracker = new StatTracker();
    this.wallet = new Wallet(0);
    this.levelManager = new LevelManager();
    this.player = {
      id: playerId,
      name: playerName,
      currentLevel: 1,
      stats: this.statTracker.getStats(),
      money: 0,
      decisions: [],
      reflection: ""
    };
  }

  startLevel(levelId: number): void {
    const level = this.levelManager.getLevel(levelId);
    if (!level) throw new Error("Level not found");
    
    this.player.currentLevel = levelId;
    this.wallet.addMoney(level.weeklyIncome);
    this.player.money = this.wallet.getMoney();
  }

  makeDecision(decisionId: string): boolean {
    const level = this.levelManager.getLevel(this.player.currentLevel);
    if (!level) return false;

    const decision = level.decisions.find(d => d.id === decisionId);
    if (!decision) return false;

    const canAfford = this.wallet.spendMoney(decision.cost);
    if (!canAfford) return false;

    this.statTracker.updateStats(decision.consequence);
    this.player.decisions.push(decisionId);
    this.player.money = this.wallet.getMoney();
    this.player.stats = this.statTracker.getStats();

    return true;
  }

  addReflection(text: string): void {
    this.player.reflection = text;
  }

  getPlayer(): Player {
    return { ...this.player };
  }

  canAdvanceLevel(): boolean {
    const stats = this.player.stats;
    const hasDecisions = this.player.decisions.length > 0;
    const stressNotTooHigh = stats.stress < 80;
    const savingsNotZero = stats.savings > 0;

    return hasDecisions && stressNotTooHigh && savingsNotZero;
  }

  advanceLevel(): boolean {
    if (!this.canAdvanceLevel()) return false;
    if (this.player.currentLevel >= this.levelManager.getTotalLevels()) return false;

    this.player.currentLevel++;
    this.player.decisions = [];
    this.player.reflection = "";
    this.statTracker.resetStats();
    this.wallet.reset();

    return true;
  }
}