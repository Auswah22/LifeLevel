"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionManager = exports.Transaction = void 0;
class Transaction {
    constructor(amount, description) {
        this.amount = amount;
        this.description = description;
    }
}
exports.Transaction = Transaction;
class TransactionManager {
    constructor() {
        this.transactions = [];
    }
    addTransaction(amount, description) {
        const transaction = new Transaction(amount, description);
        this.transactions.push(transaction);
    }
    getTransactions() {
        return this.transactions;
    }
    getBalance() {
        return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    }
    clearTransactions() {
        this.transactions = [];
    }
}
exports.TransactionManager = TransactionManager;
