export class Wallet {
  private money: number = 0;

  constructor(initialAmount: number = 0) {
    this.money = initialAmount;
  }

  getMoney(): number {
    return this.money;
  }

  addMoney(amount: number): void {
    if (amount < 0) throw new Error("Cannot add negative amount");
    this.money += amount;
  }

  spendMoney(amount: number): boolean {
    if (amount < 0) throw new Error("Cannot spend negative amount");
    if (amount > this.money) return false;
    this.money -= amount;
    return true;
  }

  reset(): void {
    this.money = 0;
  }
}