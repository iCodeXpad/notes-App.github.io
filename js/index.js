console.log('updated notes app: adding title');
console.log("Welcome to notes app. This is app.js");
showNotes(); // reload kelya kelya note display honar

// If user adds a note, add it to the localStorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
addTxt = document.getElementById("addTxt");
addTitle=document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");


  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let myObj={
      title: addTitle.value,
      text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value=""
 // console.log(notesObj);

  showNotes();
})

// Function to show elements from localStorage

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  let html = "";

  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
</div>`

  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }


}


// Function to delete a note
function deleteNote(index) {
  //console.log('i am deleting', index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

}

//search bar
let search= document.getElementById("searchTxt");

search.addEventListener("input", function() {
  
  let inputval=search.value.toLowerCase();
 // console.log("input event is fired", inputval);
  let noteCards=document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function(element){
    let cardTxt=element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputval)){
      element.style.display="block";
    }
    else{
      element.style.display="none";

    }
  })
})
