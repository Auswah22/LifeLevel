"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelManager = void 0;
class LevelManager {
    constructor() {
        this.currentLevel = 0;
        this.levels = [];
    }
    loadLevel(level) {
        this.levels.push(level);
    }
    startLevel() {
        if (this.levels[this.currentLevel]) {
            this.levels[this.currentLevel].start();
        }
    }
    completeLevel() {
        if (this.currentLevel < this.levels.length - 1) {
            this.currentLevel++;
            this.startLevel();
        }
        else {
            console.log("All levels completed!");
        }
    }
    getCurrentLevel() {
        return this.currentLevel;
    }
    getLevelCount() {
        return this.levels.length;
    }
}
exports.LevelManager = LevelManager;
