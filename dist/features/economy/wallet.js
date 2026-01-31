"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
        this.income = 0;
        this.expenses = 0;
    }
    addIncome(amount) {
        this.income += amount;
        this.balance += amount;
    }
    addExpense(amount) {
        this.expenses += amount;
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
    getIncome() {
        return this.income;
    }
    getExpenses() {
        return this.expenses;
    }
    reset() {
        this.balance = 0;
        this.income = 0;
        this.expenses = 0;
    }
}
exports.Wallet = Wallet;
