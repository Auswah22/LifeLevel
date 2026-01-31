"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = exports.randomChoice = exports.calculatePercentage = exports.formatCurrency = void 0;
const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
};
exports.formatCurrency = formatCurrency;
const calculatePercentage = (part, total) => {
    if (total === 0)
        return 0;
    return (part / total) * 100;
};
exports.calculatePercentage = calculatePercentage;
const randomChoice = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};
exports.randomChoice = randomChoice;
const validateInput = (input, regex) => {
    return regex.test(input);
};
exports.validateInput = validateInput;
