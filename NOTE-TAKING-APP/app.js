const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

addBtn.addEventListener(
    'click',
    function()
    {
        addNote();
    }
)


const saveNotes =() => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [ ]; 
    notes.forEach(
        (note)=>{data.push(note.value)}
        )

        if(notes.length===0){
            localStorage.removeItem("notes")
        }else{
            localStorage.setItem("notes" , JSON.stringify(data))
        }

}















{/* <div class="note">
<div class="tool">

    <span class="material-symbols-outlined">
    save  
    </span>
    <span class="material-symbols-outlined">
        delete
         </span>
       
</div> 

<textarea></textarea>
</div> */}
const addNote = (text="") =>{
    const note = document.createElement('div');
    note.classList.add("note")
    note.innerHTML =`
    <div class="tool">

    <span class="material-symbols-outlined save">
    save  
    </span>
    <span class="material-symbols-outlined trash">
        delete
         </span>
       
</div> 

<textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        'click',
        function(){
            note.remove();
        saveNotes()

        }
    )

    note.querySelector(".save").addEventListener(
        'click' , 
        function(){
            saveNotes();
        }
    )
    
note.querySelector("textarea").addEventListener(
    'focusout',
    function(){saveNotes()}
)
    main.appendChild(note);
        saveNotes()

}







(function(){
    const LSnotes = JSON.parse( localStorage.getItem("notes"))
    
    if(LSnotes===null)addNote()
    else
    LSnotes.forEach((lsnote)=>addNote(lsnote))


})()