import {
	addEntry,
	deleteEntry,
	setEntries,
	getEntries,
	updateEntry,
	filterEntriesByMood,
	searchEntries,
} from "../scripts/journal.js";

beforeEach(() => {
	setEntries([]);
});

describe("functionality related test cases...", () => {
	test("should add a journal to the list", () => {
		addEntry({
			title: "Test Journal",
			content: "This is the content for this journal...",
			mood: "Happy",
		});
		const addedEntries = getEntries();
		expect(addedEntries.length).toBe(1);
		expect(addedEntries[0].title).toBe("Test Journal");
	});

	test("Should delete a journal by ID", () => {
		addEntry({
			title: "Muscle Training",
			content: "Went to the Gym",
			mood: "Happy",
		});
		expect(getEntries().length).toBe(1);
		const id = getEntries()[0].id;
		deleteEntry(id);
		expect(getEntries().length).toBe(0);
	});

	test("should update the details in a journal", () => {
		addEntry({
			title: "Muscle Training",
			content: "Went to the Gym",
			mood: "Happy",
		});
		const id = getEntries()[0].id;
		updateEntry(id, {
			title: "Voice Training",
			content: "Went to the Studio",
			mood: "Happy",
		});
		expect(getEntries()[0].title).toBe("Voice Training");
	});

	test("should filter entries by mood", () => {
		addEntry({
			title: "Sing",
			content: "Rehearsals",
			mood: "Happy",
		});
		const mood = getEntries()[0].mood;
		const filterd = filterEntriesByMood("Happy");
		expect(filterd.length).toBe(1);
		expect(filterd[0].mood).toBe("Happy");
	});

	test("should search for entries by title or content", () => {
		addEntry({
			title: "Lecture notes",
			content: "Welcome back",
			mood: "Happy",
		});
		const results = searchEntries("notes");
		expect(results.length).toBe(1);
		expect(results[0].title).not.toBe("lecture notes");
		expect(results[0].title).toBe("Lecture notes");
		expect(results[0].content).toBe("Welcome back");
	});
});
