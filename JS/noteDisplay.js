function displayNote(note) {
    var title = "new Title";
    var content = "new Content";
    var htmlString = render(title,content);

    appendNewNote(htmlString);
}


function appendNewNote(htmlString) {
    var newNote = document.createElement('div');
    var element = document.getElementById("noteContainer");

    newNote.innerHTML = htmlString.trim();
    element.appendChild(newNote);
}

// duuuuuuuap pad  asddasd

function render(title,content) {

    return `<div class="note">
        <div class="notePanel">
            <h2 class="title" contenteditable="true">${title}</h2>
            <button class="deleteButton">X</button>
        </div>
        <textarea class="content">${content}</textarea>
    </div>`
}