import {
	renderEntries,
	initialUI,
	clearForm,
	prefillForm,
	formatDate,
} from "../scripts/ui.js";

document.body.innerHTML = `
  <div id="entries-container"></div>
  <form id="entry-form">
    <input id="title" />
    <textarea id="content"></textarea>
    <select id="mood"></select>
  </form>
  <button id="open-modal-btn"></button>
  <button id="close-modal-btn"></button>
  <div id="entry-container"></div>
`;

initialUI();

describe("UI related test cases...", () => {
	test("renderEntries() should display entry titles", () => {
		const entry = [
			{
				id: 1,
				title: "first entry",
				content: "entry numero uno",
				mood: "Happy",
				timestamp: new Date(),
			},
		];
		renderEntries(entry);
		expect(document.body.innerHTML).toContain("first entry");
	});

	test("clearForm() should reset form fields", () => {
		document.querySelector("#title").value = "Shopping";
		document.querySelector("#content").value = "Groceries and Cereals";
		document.querySelector("#mood").value = "Cool";
		clearForm();

		expect(document.querySelector("#title").value).toBe("");
	});

	test("prefillForm() should populate form with entry data", () => {
		const sampleData = {
			id: 1,
			title: "first entry",
			content: "entry numero uno",
			mood: "Happy",
		};
		prefillForm(sampleData);
		expect(document.querySelector("#title").value).toBe(sampleData.title);
	});

	test("formateDate() should convert ISO string to local data format", () => {
		const isoString = "2025-04-20T16:48:00.000Z";
		const formattedDate = formatDate(isoString);
		const expectedDate = new Date(isoString).toLocaleDateString();

		expect(formattedDate).toBe(expectedDate);
	});
});
