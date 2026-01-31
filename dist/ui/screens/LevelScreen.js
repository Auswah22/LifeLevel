"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const levelManager_1 = require("../../game/levelManager");
const playerStats_1 = require("../../features/stats/playerStats");
const HUD_1 = require("../components/HUD");
const LevelScreen = () => {
    const [level, setLevel] = (0, react_2.useState)(1);
    const [playerStats, setPlayerStats] = (0, react_2.useState)(new playerStats_1.PlayerStats());
    const [decisionOptions, setDecisionOptions] = (0, react_2.useState)([]);
    (0, react_2.useEffect)(() => {
        const levelManager = new levelManager_1.LevelManager();
        const currentLevel = levelManager.loadLevel(level);
        setDecisionOptions(currentLevel.decisionOptions);
    }, [level]);
    const handleDecision = (decision) => {
        const levelManager = new levelManager_1.LevelManager();
        const outcome = levelManager.processDecision(level, decision);
        setPlayerStats(prevStats => (Object.assign(Object.assign({}, prevStats), outcome.stats)));
        if (outcome.nextLevel) {
            setLevel(prevLevel => prevLevel + 1);
        }
    };
    return (<div>
            <HUD_1.HUD stats={playerStats}/>
            <h1>Level {level}</h1>
            <div>
                {decisionOptions.map(option => (<button key={option} onClick={() => handleDecision(option)}>
                        {option}
                    </button>))}
            </div>
        </div>);
};
exports.default = LevelScreen;
