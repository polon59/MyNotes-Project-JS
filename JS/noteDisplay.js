function displayNote(note) {

    `<div class="note">
        <div class="panel-heading" draggable="true">
            <h3 class="noteTitle">${note.title}</h3>
            <div class="deleteButton">
                <button>X</button>
            </div>
        </div>
    <div><textarea>${note.content}</textarea></div>
</div>`;
}
