const addNoteBtn = document.getElementById("add-note");

function newNote() {
  //create note element
  const noteElement = document.createElement("div");
  noteElement.classList.add("col-md-4");
  noteElement.innerHTML = `
        <div class="card mb-4 shadow">
          <div class="card-header">
            <span>Note Title</span>
            <button
              type="button"
              class="btn-close float-end"
              aria-label="Close"
            ></button>
          </div>
          <div class="card-body">
            Note Body
          </div>
        </div>
    `;

  document.getElementById("notes").appendChild(noteElement);

  //add event listener for card header
  const cardHeader = noteElement.querySelector(".card-header span");
  cardHeader.addEventListener("click", function () {
    this.setAttribute("contenteditable", true);
  });

  //Enter to save
  cardHeader.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.removeAttribute("contenteditable");
      this.blur();
    }
  });

  //add event listener for card body
  const cardBody = noteElement.querySelector(".card-body");
  cardBody.addEventListener("click", function () {
    this.setAttribute("contenteditable", true);
  });

  cardBody.addEventListener("blur", function(){
    this.removeAttribute("contenteditable");
  });

  //add event listener for the close button
  const closeBtn =  noteElement.querySelector('.btn-close');
  closeBtn.addEventListener("click", function(){
    noteElement.remove();
  });
}

addNoteBtn.addEventListener("click", newNote);
