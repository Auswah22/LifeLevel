"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("./game/engine");
const levelManager_1 = require("./game/levelManager");
const gameEngine = new engine_1.GameEngine();
const levelManager = new levelManager_1.LevelManager();
function startGame() {
    gameEngine.initialize();
    levelManager.loadLevel(1);
    gameEngine.startGameLoop();
}
startGame();
