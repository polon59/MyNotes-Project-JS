function createNote() {
    var note = {title:"Add title", content:"add content", id:generateID()};
    displayNote(note);
    addToNotelist(note);
}

function deleteNote(e) {
    e.target.closest('.note').remove();
    var noteID = e.target.parentElement.parentElement.id;
    removeFromNoteList(noteID);
}

    