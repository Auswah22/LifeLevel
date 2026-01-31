export interface PlayerStats {
  happiness: number;
  stress: number;
  savings: number;
  opportunities: number;
}

export interface Decision {
  id: string;
  text: string;
  cost: number;
  consequence: {
    happiness: number;
    stress: number;
    savings: number;
    opportunities: number;
  };
}

export interface Level {
  id: number;
  name: string;
  weeklyIncome: number;
  decisions: Decision[];
  reflection: string;
}

export interface Player {
  id: string;
  name: string;
  currentLevel: number;
  stats: PlayerStats;
  money: number;
  decisions: string[];
  reflection: string;
}