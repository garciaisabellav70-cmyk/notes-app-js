const noteInput = document.querySelector("#note-input");
const saveButton = document.querySelector("#save-btn");
const notesList = document.querySelector("#notes-list");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
      <span>${note}</span>
      <button class="delete-btn" onclick="deleteNote(${index})">
        Delete
      </button>
    `;

        notesList.appendChild(li);
    });
}

function addNote() {
    const note = noteInput.value.trim();

    if (note === "") {
        return;
    }

    notes.push(note);

    saveToLocalStorage();
    renderNotes();

    noteInput.value = "";
}

function deleteNote(index) {
    notes.splice(index, 1);

    saveToLocalStorage();
    renderNotes();
}

saveButton.addEventListener("click", addNote);

renderNotes();