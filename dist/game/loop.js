"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLoop = void 0;
class GameLoop {
    constructor(gameEngine) {
        this.lastTime = 0;
        this.isRunning = false;
        this.gameEngine = gameEngine;
    }
    start() {
        this.isRunning = true;
        this.lastTime = performance.now();
        this.loop();
    }
    stop() {
        this.isRunning = false;
    }
    loop() {
        if (!this.isRunning)
            return;
        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;
        this.update(deltaTime);
        this.render();
        this.lastTime = currentTime;
        requestAnimationFrame(() => this.loop());
    }
    update(deltaTime) {
        this.gameEngine.update(deltaTime);
    }
    render() {
        this.gameEngine.render();
    }
}
exports.GameLoop = GameLoop;
