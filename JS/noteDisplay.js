function displayNote(note) {
    var title = "new Title"

}



function render(title,content) {
    `<div class="note">
        <div class="panel-heading" draggable="true">
            <h3 class="noteTitle">${title}</h3>
            <div class="deleteButton">
                <button>X</button>
            </div>
        </div>
        <div><textarea>${content}</textarea></div>
    </div>`;
}