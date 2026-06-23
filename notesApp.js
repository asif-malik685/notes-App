let notes = [];
notes = JSON.parse(localStorage.getItem("notes")) || [];
// container.innerHTML += "<p>" + note + " <button onclick='deleteNote(this)'>Delete</button></p>";
function addNote() {
  let note = document.getElementById("noteinput").value;
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
  document.getElementById("noteinput").value = "";
  console.log(localStorage.getItem("notes"));
}
function deleteNote(button) {
  let noteText = button.parentElement.firstChild.textContent.trim();
  notes = notes.filter(note => note !== noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}
function renderNotes() {
  let container = document.getElementById("notesContainer");
  container.innerHTML = "";
  for (let note of notes) {
    container.innerHTML +=
      "<p>" + note + " <button onclick='deleteNote(this)'>Delete</button></p>";
  }
}
renderNotes();
