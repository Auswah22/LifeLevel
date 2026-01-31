"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Journal = void 0;
class Journal {
    constructor() {
        this.entries = [];
    }
    addEntry(reflection) {
        const date = new Date().toISOString().split('T')[0];
        this.entries.push({ date, reflection });
    }
    getEntries() {
        return this.entries;
    }
    clearEntries() {
        this.entries = [];
    }
}
exports.Journal = Journal;
