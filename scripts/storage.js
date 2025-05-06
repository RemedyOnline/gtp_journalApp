// this handles the logic for saving and retrieving data from localStorage...
// --------- ToDo's ------------
// saveToStorage(entries)
// getFromStorage()
//... wrap localStorage.setItem() and localStorage.getItem() for reuse

const STORAGE_KEY = "journalEnties";

export function saveToStorage(entries) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function getFromStorage() {
	const data = localStorage.getItem(STORAGE_KEY);
	return data ? JSON.parse(data) : [];
}
