// this is the entry point that connects all functionalities...
// --------- ToDo's ------------
// initializes the app
// gets data from storage
// wires up UI events to journal logic
// calls render when data changes

// main.js

import {
	addEntry,
	deleteEntry,
	updateEntry,
	getEntries,
	setEntries,
	filterEntriesByMood,
	searchEntries,
} from "./journal.js";

import { getFromStorage, saveToStorage } from "./storage.js";
import { renderEntries, clearForm, prefillForm } from "./ui.js";

const form = document.querySelector("#entry-form");
const searchInput = document.querySelector("#search");
const moodFilter = document.querySelector("#filter-by-mood");
const entriesContainer = document.querySelector("#entries-container");

const savedEntries = getFromStorage(); // initializing the app...
setEntries(savedEntries);
renderEntries(getEntries());

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const title = form.title.value.trim();
	const content = form.content.value.trim();
	const mood = form.mood.value;
	const editId = form.dataset.editId; // checking if the form is editing or adding...

	if (!title || !content || !mood) {
		alert("Please fill in all fields");
		return;
	}

	// on submit, add journal if editId already exists...
	if (editId) {
		updateEntry(Number(editId), { title, content, mood });
		delete form.dataset.editId;
	} else {
		addEntry({ title, content, mood });
	}

	saveToStorage(getEntries());
	renderEntries(getEntries());
	clearForm();
});

entriesContainer.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete-btn")) {
		const id = Number(e.target.dataset.id);
		deleteEntry(id);
		saveToStorage(getEntries());
		renderEntries(getEntries());
	}

	if (e.target.classList.contains("edit-btn")) {
		const id = Number(e.target.dataset.id);
		const entry = getEntries().find((e) => e.id === id);
		prefillForm(entry);
	}
});

moodFilter.addEventListener("change", () => {
	const mood = moodFilter.value;
	if (mood === "all") {
		renderEntries(getEntries());
	} else {
		renderEntries(filterEntriesByMood(mood));
	}
});

searchInput.addEventListener("input", () => {
	const query = searchInput.value.trim();
	renderEntries(searchEntries(query));
});
