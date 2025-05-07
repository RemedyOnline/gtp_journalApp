// this handles the logic for DOM manipulation and UI rendering...
// --------- ToDo's ------------
// renderEntrie(entries)
// showForm(entry) for add/edit
// clearformm()
// bindUIEvents() to handle event listeners
//... handles DOM interaction, renders entries dynamically

const entriesContainer = document.querySelector("#entries-container");
const form = document.querySelector("#entry-form");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const moodInput = document.querySelector("#mood");

export function renderEntries(entries) {
	entriesContainer.innerHTML = "";

	if (entries.length === 0) {
		entriesContainer.innerHTML = `
      <p class="empty">No journals found... let's jot something down charleyy!</p>`;
		return;
	}

	entries.forEach((entry) => {
		const entryItem = document.createElement("div");
		entryItem.classList.add("entry");
		entryItem.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${entry.content}</p>
      <p><strong>Mood:</strong> ${entry.mood}</p>
      <p class="timestamp">${formatDate(entry.timestamp)}
      <div class="entry-buttons">
      <button data-id="${entry.id}" class="edit-btn">Edit</button>
      <button data-id="${entry.id}" class="delete-btn">Delete</button>
      </div>`;
		entriesContainer.appendChild(entryItem);
	});
}

export function clearForm() {
	form.reset();
}

// prefilling the form for editing...
export function prefillForm(entry) {
	titleInput.value = entry.title;
	contentInput.value = entry.content;
	moodInput.value = entry.mood;
	form.dataset.editId = entry.id; // set an attribute to know this is an edit
}

// formatting the timestamp display
function formatDate(isoString) {
	const date = new Date(isoString);
	return date.toLocaleDateString();
}
