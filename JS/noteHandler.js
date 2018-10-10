var notesList = [];

//fill notes list

function addToNotelist(note) {
    notesList.push(note);
}


function removeFromNoteList(note) {
    var index = notesList.indexOf(note);
    notesList = notesList.splice(index,index+1);
    notesList = _.without(notesList,note);
}