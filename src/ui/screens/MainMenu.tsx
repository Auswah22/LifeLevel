import React from 'react';

const MainMenu: React.FC = () => {
    const startGame = () => {
        // Logic to start the game
    };

    const viewInstructions = () => {
        // Logic to view game instructions
    };

    const viewCredits = () => {
        // Logic to view credits
    };

    return (
        <div className="main-menu">
            <h1>LifeLevel</h1>
            <button onClick={startGame}>Start Game</button>
            <button onClick={viewInstructions}>Instructions</button>
            <button onClick={viewCredits}>Credits</button>
        </div>
    );
};

export default MainMenu;