export class Transaction {
    constructor(public amount: number, public description: string) {}
}

export class TransactionManager {
    private transactions: Transaction[] = [];

    addTransaction(amount: number, description: string): void {
        const transaction = new Transaction(amount, description);
        this.transactions.push(transaction);
    }

    getTransactions(): Transaction[] {
        return this.transactions;
    }

    getBalance(): number {
        return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    }

    clearTransactions(): void {
        this.transactions = [];
    }
}