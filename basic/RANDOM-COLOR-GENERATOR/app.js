const getcolor = ( ) => {
    var random =Math.floor( Math.random() *16777215)
    random = "#" + random.toString(16) ; 
    document.body.style.backgroundColor = random  ;
    document.getElementById('color-code').innerText= random

    navigator.clipboard.writeText(random)

}

document.getElementById('btn').addEventListener("click" , getcolor)

getcolor()