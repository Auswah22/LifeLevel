"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MainMenu = () => {
    const startGame = () => {
        // Logic to start the game
    };
    const viewInstructions = () => {
        // Logic to view game instructions
    };
    const viewCredits = () => {
        // Logic to view credits
    };
    return (<div className="main-menu">
            <h1>LifeLevel</h1>
            <button onClick={startGame}>Start Game</button>
            <button onClick={viewInstructions}>Instructions</button>
            <button onClick={viewCredits}>Credits</button>
        </div>);
};
exports.default = MainMenu;
