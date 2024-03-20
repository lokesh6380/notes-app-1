const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}
function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");

}
showNotes();

createbtn.addEventListener("click",()=>{
    
let inputbox=document.createElement("p");
let img = document.createElement("img");
inputbox.className = "input-box";
inputbox.setAttribute("contenteditable","true");
img.src = "images/delete.png";
notescontainer.appendChild(inputbox).appendChild(img);

})

notescontainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
    else if(e.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.lookupNamespaceURI = function (){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event =>
{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

