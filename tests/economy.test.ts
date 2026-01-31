import { Wallet } from '../src/features/economy/wallet';
import { TransactionManager } from '../src/features/economy/transactions';

describe('Economy Features', () => {
    let wallet: Wallet;
    let transactionManager: TransactionManager;

    beforeEach(() => {
        wallet = new Wallet();
        transactionManager = new TransactionManager(wallet);
    });

    test('initial wallet balance should be zero', () => {
        expect(wallet.getBalance()).toBe(0);
    });

    test('should add income to wallet', () => {
        wallet.addIncome(100);
        expect(wallet.getBalance()).toBe(100);
    });

    test('should deduct expenses from wallet', () => {
        wallet.addIncome(100);
        transactionManager.processTransaction(-50);
        expect(wallet.getBalance()).toBe(50);
    });

    test('should not allow negative balance', () => {
        wallet.addIncome(50);
        transactionManager.processTransaction(-100);
        expect(wallet.getBalance()).toBe(0);
    });

    test('should handle multiple transactions correctly', () => {
        wallet.addIncome(200);
        transactionManager.processTransaction(-50);
        transactionManager.processTransaction(-30);
        expect(wallet.getBalance()).toBe(120);
    });
});