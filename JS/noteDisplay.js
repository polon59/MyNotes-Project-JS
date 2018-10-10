function displayNote(note) {
    var title = note.title;
    var content = note.content;
    var id = note.id;
    var htmlString = render(title,content,id);

    appendNewNote(htmlString);
}


function appendNewNote(htmlString) {
    var newNote = document.createElement('div');
    var element = document.getElementById("noteContainer");

    newNote.innerHTML = htmlString.trim();
    element.appendChild(newNote);
}


function render(title,content,id) {

    return `<div class="note">
        <div class="notePanel">
            <h2 class="title" contenteditable="true">${title}</h2>
            <button class="deleteButton" onclick="deleteNote(event)" id ="${id}">X</button>
        </div>
        <textarea class="content">${content}</textarea>
    </div>`
}