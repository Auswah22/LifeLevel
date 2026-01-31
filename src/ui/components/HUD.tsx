import React from 'react';
import { PlayerStats } from '../../features/stats/playerStats';

const HUD: React.FC<{ playerStats: PlayerStats }> = ({ playerStats }) => {
    return (
        <div className="hud">
            <h2>Player Stats</h2>
            <p>Happiness: {playerStats.happiness}</p>
            <p>Stress: {playerStats.stress}</p>
            <p>Savings: ${playerStats.savings}</p>
            <p>Opportunities: {playerStats.opportunities}</p>
            <div className="notifications">
                {/* Notifications can be added here */}
            </div>
        </div>
    );
};

export default HUD;