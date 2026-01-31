import { GameState } from '../types'; // Assuming you have a GameState type defined in your types/index.ts

class SaveService {
    private storageKey: string = 'lifeLevelGameState';

    saveGameState(state: GameState): void {
        const stateString = JSON.stringify(state);
        localStorage.setItem(this.storageKey, stateString);
    }

    loadGameState(): GameState | null {
        const stateString = localStorage.getItem(this.storageKey);
        if (stateString) {
            return JSON.parse(stateString) as GameState;
        }
        return null;
    }

    clearGameState(): void {
        localStorage.removeItem(this.storageKey);
    }
}

export default new SaveService();