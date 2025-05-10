let entriesContainer;
let form;
let titleInput;
let contentInput;
let moodInput;
let openModalBtn;
let closeModalBtn;
let entryModal;

export function initialUI() {
	entriesContainer = document.querySelector("#entries-container");
	form = document.querySelector("#entry-form");
	titleInput = document.querySelector("#title");
	contentInput = document.querySelector("#content");
	moodInput = document.querySelector("#mood");
	openModalBtn = document.getElementById("open-modal-btn");
	closeModalBtn = document.getElementById("close-modal-btn");
	entryModal = document.getElementById("entry-container");

	if (openModalBtn && entryModal) {
		openModalBtn.addEventListener("click", () => {
			entryModal.classList.remove("hidden");
		});
	}

	if (closeModalBtn && entryModal) {
		closeModalBtn.addEventListener("click", () => {
			entryModal.classList.add("hidden");
		});
	}

	if (entryModal) {
		entryModal.addEventListener("click", (e) => {
			if (e.target === entryModal) {
				entryModal.classList.add("hidden");
			}
		});
	}
}

export function clearForm() {
	form.reset();
}

// prefilling the form for editing...
export function prefillForm(entry) {
	titleInput.value = entry.title;
	contentInput.value = entry.content;
	moodInput.value = entry.mood;
	form.dataset.editId = entry.id; // setting an attribute to know this is an edit
}

export function renderEntries(entries) {
	if (!entriesContainer) return;

	entriesContainer.innerHTML = "";

	if (entries.length === 0) {
		entriesContainer.innerHTML = `<p class="empty">No journals found... let's jot something down charleyy!</p>`;
		return;
	}

	entries.forEach((entry) => {
		const entryItem = document.createElement("div");
		entryItem.classList.add("entry");
		entryItem.innerHTML = `
			<h3>${entry.title}</h3>
			<p>${entry.content}</p>
			<p><strong>Mood:</strong> ${entry.mood}</p>
			<p class="meta">${formatDate(entry.timestamp)}</p>
			<div class="entry-actions">
				<div class="entry-buttons">
					<button data-id="${entry.id}" class="edit-btn">Edit</button>
					<button data-id="${entry.id}" class="delete-btn">Delete</button>
				</div>
			</div>
		`;
		entriesContainer.appendChild(entryItem);
	});
}

export function formatDate(isoString) {
	const date = new Date(isoString);
	return date.toLocaleDateString();
}
