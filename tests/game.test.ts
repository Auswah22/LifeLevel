import { GameEngine } from '../src/game/engine';
import { LevelManager } from '../src/game/levelManager';
import { Wallet } from '../src/features/economy/wallet';
import { PlayerStats } from '../src/features/stats/playerStats';

describe('GameEngine', () => {
    let gameEngine: GameEngine;
    let levelManager: LevelManager;
    let wallet: Wallet;
    let playerStats: PlayerStats;

    beforeEach(() => {
        wallet = new Wallet();
        playerStats = new PlayerStats();
        levelManager = new LevelManager();
        gameEngine = new GameEngine(levelManager, wallet, playerStats);
    });

    test('should initialize with default values', () => {
        expect(gameEngine.getState()).toEqual({
            currentLevel: 1,
            isGameOver: false,
            playerStats: playerStats.getStats(),
            wallet: wallet.getBalance(),
        });
    });

    test('should progress to the next level', () => {
        gameEngine.progressToNextLevel();
        expect(gameEngine.getState().currentLevel).toBe(2);
    });

    test('should handle game over state', () => {
        gameEngine.setGameOver();
        expect(gameEngine.getState().isGameOver).toBe(true);
    });

    test('should update player stats correctly', () => {
        playerStats.updateStats({ happiness: 80, stress: 20 });
        expect(playerStats.getStats()).toEqual({ happiness: 80, stress: 20, savings: 0, opportunities: 0 });
    });

    test('should manage wallet transactions', () => {
        wallet.addFunds(100);
        expect(wallet.getBalance()).toBe(100);
        wallet.subtractFunds(50);
        expect(wallet.getBalance()).toBe(50);
    });
});