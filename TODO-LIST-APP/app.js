const item = document.querySelector("#item");
const todoBox = document.querySelector("#todoBox");

console.log(item);
item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    console.log(this.value);
    addNote(this.value);
    this.value = "";
  }
});

const addNote = (text) => {
  var newList = document.createElement("li");
  console.log(text);
  newList.innerHTML = `
        ${text}
        <i class="fas fa-times"></i>
    
`;


  todoBox.appendChild(newList);

  newList.addEventListener(
    'click',
    function(){
        this.classList.toggle('done')
    }

  )

  newList.querySelector('i').addEventListener(

    ("click") ,
    function(){newList.remove()}
  )
};
