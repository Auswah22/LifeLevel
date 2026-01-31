export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
};

export const calculatePercentage = (part: number, total: number): number => {
    if (total === 0) return 0;
    return (part / total) * 100;
};

export const randomChoice = <T>(items: T[]): T => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};

export const validateInput = (input: string, regex: RegExp): boolean => {
    return regex.test(input);
};