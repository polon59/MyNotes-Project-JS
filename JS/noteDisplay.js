function displayNote(note) {
    var title = note.title;
    var content = note.content;
    var htmlString = render(title,content);

    appendNewNote(htmlString);
}


function appendNewNote(htmlString) {
    var newNote = document.createElement('div');
    var element = document.getElementById("noteContainer");

    newNote.innerHTML = htmlString.trim();
    element.appendChild(newNote);
}


function render(title,content) {

    return `<div class="note">
        <div class="notePanel">
            <h2 class="title" contenteditable="true">${title}</h2>
            <button class="deleteButton" onclick="deleteNote(event)">X</button>
        </div>
        <textarea class="content">${content}</textarea>
    </div>`
}