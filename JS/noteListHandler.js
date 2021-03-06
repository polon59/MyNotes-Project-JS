var notesList = [];


function fillNoteListFromLS() {
    notesList = JSON.parse(localStorage.getItem("notesList"));
    displayNotesFromList(notesList);
}


function saveNotesListInLS() {
    localStorage.setItem("notesList", JSON.stringify(notesList));
}


function addToNotelist(note) {
    notesList.push(note);
}


function removeFromNoteList(noteID) {
    notesList.forEach(element => {
        if (element.id == noteID) {
            notesList.splice(notesList.indexOf(element),1);
        }
    });
}


function getListOfIDs() {
    var idList = [];
    
    notesList.forEach(element => {
        idList.push(element.id);
    });
    return idList;
}


function generateID() {
    var id = 0;
    var isUnique = false;
    var idList = getListOfIDs();

    while(!isUnique){
        if (idList.indexOf(id) == -1) {
            return id;
        } else {
            id++;
        }
    }
}


function changeNoteListContent(noteID,newContent) {
    notesList.forEach(element => {
        if (element.id == noteID) {
            element.content = newContent;
        }
    });
}


function changeNoteListTitle(noteID,newTitle) {

    notesList.forEach(element => {
        if (noteID==element.id) {
            element.title = newTitle;
        }
    });
}
