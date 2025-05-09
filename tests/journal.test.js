import { addEntry, setEntries, getEntries } from "../scripts/journal.js";

beforeEach(() => {
	setEntries([]);
});

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
