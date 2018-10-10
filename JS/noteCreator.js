fillNoteListFromLS();

function createNote() {
    var note = {title:"Add title", content:"add content", id:generateID()};
    displayNote(note);
    addToNotelist(note);
    saveNotesListInLS();
}

function deleteNote(e) {
    e.target.closest('.note').remove();
    var noteID = e.target.parentElement.parentElement.id;
    removeFromNoteList(noteID);
    saveNotesListInLS();
}


function changeContent(e) {
    var noteID = e.target.parentElement.id;
    var newContent = e.target.value;
    changeNoteListContent(noteID,newContent);
    saveNotesListInLS();
}

    