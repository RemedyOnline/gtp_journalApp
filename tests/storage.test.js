import { getFromStorage, saveToStorage } from "../scripts/storage.js";

beforeEach(() => {
	localStorage.clear();
});

describe("storage related test cases...", () => {
	test("should save entries to localStorage", () => {
		const sampleData = [
			{
				id: 1,
				title: "first entry",
				content: "entry numero uno",
				mood: "Happy",
			},
		];
		saveToStorage(sampleData);
		const savedItem = JSON.parse(localStorage.getItem("journalEntries"));
		expect(savedItem.length).toBe(1);
	});

	test("should load entries from localStorage", () => {
		const sampleData = [
			{
				id: 1,
				title: "first entry",
				content: "entry numero uno",
				mood: "Happy",
			},
		];
		localStorage.setItem("journalEntries", JSON.stringify(sampleData));
		const cachedData = getFromStorage();
		expect(cachedData[0].title).toBe("first entry");
	});
});
