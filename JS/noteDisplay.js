function displayNote(note) {
    var title = "new Title";
    var content = "new Content";
    var htmlString = render(title,content);



    var newNote = document.createElement('div');
    newNote.innerHTML = htmlString.trim();


    var element = document.getElementById("noteContainer");
    element.appendChild(newNote);
}



function render(title,content) {
    return `<div class="note">
        <div class="panel-heading" draggable="true">
            <h3 class="noteTitle">${title}</h3>
            <div class="deleteButton">
                <button>X</button>
            </div>
        </div>
        <div><textarea>${content}</textarea></div>
    </div>`;
}