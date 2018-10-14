fillNoteListFromLS();

function createNote() {
    var note = {title:"Add title", content:"add content", id:generateID()};

    displayNote(note);
    addToNotelist(note);
    saveNotesListInLS();
}


function deleteNote(e) {
    var noteID = e.target.parentElement.parentElement.id;

    e.target.closest('.note').remove();
    removeFromNoteList(noteID);
    saveNotesListInLS();
}


function changeContent(e) {
    var noteID = e.target.parentElement.id;
    var newContent = e.target.value;

    changeNoteListContent(noteID,newContent);
    saveNotesListInLS();
}


function changeTitle(e) {
    var noteID = e.target.parentElement.parentElement.id;
    var newTitle = e.target.innerHTML;

    changeNoteListTitle(noteID,newTitle);
    saveNotesListInLS();
}

    