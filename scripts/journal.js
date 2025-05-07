// this contains the logic for Journal Entry - (CRUD)
// Thus, Creation, Editing, Searching, Deletion and Filtering...
// --------- ToDo's ------------
// addEntry(entry)
// deleteEntry(id)
// updateEntry(id, updatedEntry)
// getEntries(),
// setEntries(data),
// filterEntriesByMood(mood)
// searchEntries(query)
//... export these functions to use in other modules...

// ADD SORT FUNCTIONALITY...
// Creating mood-based reports or summaries

// creating an array to store journal entries...
let entries = [];

// addEntry(entry)
export function addEntry({ title, content, mood }) {
	const entry = {
		id: Date.now(),
		title,
		content,
		mood,
		timestamp: new Date().toISOString(),
	};
	entries.push(entry);
	console.log(title, "added to journals...");

	return entry;
}

// deleteEntry(id)
export function deleteEntry(id) {
	entries = entries.filter((entry) => entry.id !== id);
	console.log(id, "deleted from the journals");
}

// edit an entry(id, updatedEntry)
export function updateEntry(id, updatedEntry) {
	entries = entries.map((entry) =>
		entry.id === id ? { ...entry, ...updatedEntry } : entry
	);
	console.log(title, "edited successfully");
}

// getEntries()
export function getEntries() {
	console.log("entries refreshed...");
	return [...entries];
}

// setting initial data, especially after loading stored data from localStorage...
export function setEntries(savedEntries) {
	entries = savedEntries;
}

// filter entries by mood(mood)
export function filterEntriesByMood(mood) {
	console.log("entries filtered by", mood);
	return entries.filter((entry) => entry.mood === mood);
}

// searchEntries(query) by title or content...
export function searchEntries(query) {
	const q = query.toLowerCase();
	console.log(query);
	console.log(q);
	console.log("searching by", q);

	return entries.filter(
		(entry) =>
			entry.title.toLowerCase().includes(q) ||
			entry.content.toLowerCase().includes(q)
	);
}
