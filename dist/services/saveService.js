"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SaveService {
    constructor() {
        this.storageKey = 'lifeLevelGameState';
    }
    saveGameState(state) {
        const stateString = JSON.stringify(state);
        localStorage.setItem(this.storageKey, stateString);
    }
    loadGameState() {
        const stateString = localStorage.getItem(this.storageKey);
        if (stateString) {
            return JSON.parse(stateString);
        }
        return null;
    }
    clearGameState() {
        localStorage.removeItem(this.storageKey);
    }
}
exports.default = new SaveService();
