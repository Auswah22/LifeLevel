export class Wallet {
    private balance: number;
    private income: number;
    private expenses: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
        this.income = 0;
        this.expenses = 0;
    }

    public addIncome(amount: number): void {
        this.income += amount;
        this.balance += amount;
    }

    public addExpense(amount: number): void {
        this.expenses += amount;
        this.balance -= amount;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getIncome(): number {
        return this.income;
    }

    public getExpenses(): number {
        return this.expenses;
    }

    public reset(): void {
        this.balance = 0;
        this.income = 0;
        this.expenses = 0;
    }
}