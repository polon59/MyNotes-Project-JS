function createNote() {
    var note = {title:"Add title", content:"add content"};
    displayNote(note);
    addToNotelist(note);
}

function deleteNote(e) {
    e.target.closest('.note').remove();

}

    