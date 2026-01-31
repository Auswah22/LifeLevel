export class Journal {
    private entries: { date: string; reflection: string }[];

    constructor() {
        this.entries = [];
    }

    addEntry(reflection: string): void {
        const date = new Date().toISOString().split('T')[0];
        this.entries.push({ date, reflection });
    }

    getEntries(): { date: string; reflection: string }[] {
        return this.entries;
    }

    clearEntries(): void {
        this.entries = [];
    }
}