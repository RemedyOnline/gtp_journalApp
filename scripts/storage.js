const STORAGE_KEY = "journalEntries";

export function saveToStorage(entries) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
	// converting the array of journals to a JSON string...
}

export function getFromStorage() {
	const data = localStorage.getItem(STORAGE_KEY);
	return data ? JSON.parse(data) : [];
	// converting our JSON string back to a JS array (the journals array)
}
