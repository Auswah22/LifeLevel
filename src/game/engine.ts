class GameEngine {
    private currentLevel: number;
    private isGameRunning: boolean;

    constructor() {
        this.currentLevel = 1;
        this.isGameRunning = false;
    }

    startGame() {
        this.isGameRunning = true;
        this.loadLevel(this.currentLevel);
    }

    loadLevel(level: number) {
        // Logic to load the specified level
        console.log(`Loading level ${level}`);
        // Here you would typically import the level module and initialize it
    }

    updateGameState() {
        // Logic to update the game state
        console.log("Updating game state");
    }

    endGame() {
        this.isGameRunning = false;
        console.log("Game Over");
    }

    getCurrentLevel() {
        return this.currentLevel;
    }

    setCurrentLevel(level: number) {
        this.currentLevel = level;
    }

    isRunning() {
        return this.isGameRunning;
    }
}

export default GameEngine;