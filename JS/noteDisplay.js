function displayNote(note) {
    var title = note.title;
    var content = note.content;
    var id = note.id;
    var htmlString = render(title,content,id);

    appendNewElement(htmlString);
}


function appendNewElement(htmlString) {
    var newNote = document.createElement('div');
    var element = document.getElementById("noteContainer");

    newNote.innerHTML = htmlString.trim();
    element.appendChild(newNote);
}


function render(title,content,id) {

    return `<div class="note" id ="${id}">
        <div class="notePanel">
            <h2 class="title" contenteditable="true">${title}</h2>
            <button class="deleteButton" onclick="deleteNote(event)">X</button>
        </div>
        <textarea onchange="changeContent(event)" class="content">${content}</textarea>
    </div>`
}


function displayNotesFromList(notesList) {
    notesList.forEach(note => {
        displayNote(note);
    });
}