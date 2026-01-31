import { Level } from "../types/index";

export class LevelManager {
  private levels: Level[] = [
    {
      id: 1,
      name: "School Life",
      weeklyIncome: 20,
      reflection: "What was one smart money choice you made this week, and what would you change next time?",
      decisions: [
        // Day 1
        {
          id: "1-1",
          text: "Buy snack on the way to school ($2) or eat homemade lunch?",
          cost: 2,
          consequence: {
            happiness: 2,
            stress: 0,
            savings: -2,
            opportunities: 0
          }
        },
        {
          id: "1-2",
          text: "Do chores for extra money (+$5) or play video games?",
          cost: 0,
          consequence: {
            happiness: -1,
            stress: 1,
            savings: 5,
            opportunities: 1
          }
        },
        // Day 2
        {
          id: "1-3",
          text: "Buy snack with friend ($3) or save money?",
          cost: 3,
          consequence: {
            happiness: 2,
            stress: 0,
            savings: -3,
            opportunities: 0
          }
        },
        {
          id: "1-4",
          text: "Buy new pencil case ($3) or borrow from friend?",
          cost: 3,
          consequence: {
            happiness: 0,
            stress: -1,
            savings: -3,
            opportunities: 0
          }
        },
        // Day 3
        {
          id: "1-5",
          text: "Buy lunch treat ($4) or eat regular lunch?",
          cost: 4,
          consequence: {
            happiness: 2,
            stress: 0,
            savings: -4,
            opportunities: 0
          }
        },
        {
          id: "1-6",
          text: "Save $5 for school trip or ignore saving?",
          cost: 5,
          consequence: {
            happiness: 1,
            stress: 0,
            savings: -5,
            opportunities: 2
          }
        },
        // Day 4
        {
          id: "1-7",
          text: "Spend $5 on in-app purchases or save for real?",
          cost: 5,
          consequence: {
            happiness: 2,
            stress: 0,
            savings: -5,
            opportunities: 0
          }
        },
        // Day 5
        {
          id: "1-8",
          text: "Buy candies for friend ($3) or save money?",
          cost: 3,
          consequence: {
            happiness: 2,
            stress: 0,
            savings: -3,
            opportunities: 0
          }
        },
        {
          id: "1-9",
          text: "Help neighbor for $5 or play video games?",
          cost: 0,
          consequence: {
            happiness: 2,
            stress: 0,
            savings: 5,
            opportunities: 2
          }
        },
        // Day 6
        {
          id: "1-10",
          text: "Buy $2 snack or $4 better snack?",
          cost: 2,
          consequence: {
            happiness: 1,
            stress: 0,
            savings: -2,
            opportunities: 0
          }
        },
        {
          id: "1-11",
          text: "Donate $3 to charity or buy food for yourself?",
          cost: 3,
          consequence: {
            happiness: 2,
            stress: 2,
            savings: -3,
            opportunities: -1
          }
        }
      ]
    },
    {
      id: 2,
      name: "Allowance & Budgeting",
      weeklyIncome: 30,
      reflection: "How did budgeting help you this week?",
      decisions: [
        {
          id: "2-1",
          text: "Create a budget plan ($5 save, $15 spend, $10 fun)",
          cost: 0,
          consequence: {
            happiness: 1,
            stress: -5,
            savings: 5,
            opportunities: 2
          }
        },
        {
          id: "2-2",
          text: "Spend without planning",
          cost: 0,
          consequence: {
            happiness: 2,
            stress: 5,
            savings: 0,
            opportunities: -1
          }
        }
      ]
    },
    {
      id: 3,
      name: "First Income",
      weeklyIncome: 40,
      reflection: "What did you learn about earning money?",
      decisions: [
        {
          id: "3-1",
          text: "Work part-time job for $40",
          cost: 0,
          consequence: {
            happiness: 0,
            stress: 5,
            savings: 40,
            opportunities: 3
          }
        }
      ]
    },
    {
      id: 4,
      name: "Big Goal + Emergency",
      weeklyIncome: 50,
      reflection: "How did you handle unexpected costs?",
      decisions: [
        {
          id: "4-1",
          text: "Emergency repair ($30) - break your savings or borrow?",
          cost: 30,
          consequence: {
            happiness: -10,
            stress: 10,
            savings: -30,
            opportunities: 0
          }
        }
      ]
    }
  ];

  getLevel(levelId: number): Level | undefined {
    return this.levels.find(l => l.id === levelId);
  }

  getAllLevels(): Level[] {
    return this.levels;
  }

  getTotalLevels(): number {
    return this.levels.length;
  }

  getDecision(levelId: number, decisionId: string) {
    const level = this.getLevel(levelId);
    return level?.decisions.find(d => d.id === decisionId);
  }
}