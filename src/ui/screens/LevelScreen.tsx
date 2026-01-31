import React from 'react';
import { useEffect, useState } from 'react';
import { LevelManager } from '../../game/levelManager';
import { PlayerStats } from '../../features/stats/playerStats';
import { HUD } from '../components/HUD';

const LevelScreen: React.FC = () => {
    const [level, setLevel] = useState<number>(1);
    const [playerStats, setPlayerStats] = useState<PlayerStats>(new PlayerStats());
    const [decisionOptions, setDecisionOptions] = useState<string[]>([]);

    useEffect(() => {
        const levelManager = new LevelManager();
        const currentLevel = levelManager.loadLevel(level);
        setDecisionOptions(currentLevel.decisionOptions);
    }, [level]);

    const handleDecision = (decision: string) => {
        const levelManager = new LevelManager();
        const outcome = levelManager.processDecision(level, decision);
        setPlayerStats(prevStats => ({
            ...prevStats,
            ...outcome.stats
        }));
        if (outcome.nextLevel) {
            setLevel(prevLevel => prevLevel + 1);
        }
    };

    return (
        <div>
            <HUD stats={playerStats} />
            <h1>Level {level}</h1>
            <div>
                {decisionOptions.map(option => (
                    <button key={option} onClick={() => handleDecision(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LevelScreen;