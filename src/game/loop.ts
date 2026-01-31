export class GameLoop {
    private lastTime: number = 0;
    private gameEngine: any; // Replace with actual type of game engine
    private isRunning: boolean = false;

    constructor(gameEngine: any) {
        this.gameEngine = gameEngine;
    }

    public start(): void {
        this.isRunning = true;
        this.lastTime = performance.now();
        this.loop();
    }

    public stop(): void {
        this.isRunning = false;
    }

    private loop(): void {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;

        this.update(deltaTime);
        this.render();

        this.lastTime = currentTime;
        requestAnimationFrame(() => this.loop());
    }

    private update(deltaTime: number): void {
        this.gameEngine.update(deltaTime);
    }

    private render(): void {
        this.gameEngine.render();
    }
}