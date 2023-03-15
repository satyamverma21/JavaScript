const upperset ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset ="abcdefghijklmnopqrstuvwxyz"
const numberset = "123456789"
const symbolset = "~!@#$%^&*())_+/"



const passBox = document.getElementById('pass-box')
const cInput = document.getElementById('total-char')
const uInput = document.getElementById('upper-case')
const lInput = document.getElementById('lower-case')
const nInput = document.getElementById('numbers')
const sInput = document.getElementById('symbols')


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random()* dataSet.length)]
}

const generate =(passwd = "")  => {

    if(uInput.checked) passwd+=getRandomData(upperset)
    if(nInput.checked) passwd+=getRandomData(numberset)
    if(sInput.checked) passwd+=getRandomData(symbolset)
    if(lInput.checked) passwd+=getRandomData(lowerset)

    if(passwd.length<cInput.value) return generate(passwd);
    
    passBox.innerText =  passwd.slice(0,cInput.value) 

}

