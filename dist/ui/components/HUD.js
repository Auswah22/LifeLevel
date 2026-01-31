"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HUD = ({ playerStats }) => {
    return (<div className="hud">
            <h2>Player Stats</h2>
            <p>Happiness: {playerStats.happiness}</p>
            <p>Stress: {playerStats.stress}</p>
            <p>Savings: ${playerStats.savings}</p>
            <p>Opportunities: {playerStats.opportunities}</p>
            <div className="notifications">
                {/* Notifications can be added here */}
            </div>
        </div>);
};
exports.default = HUD;
