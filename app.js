const generatedPassword = document.getElementById("password-output")
function generate(){
let password = ""
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbersArray = "0123456789"
const specialSymbols = "!@#$%^&*()_+-={}[]|\"\:;\"<>,.?/~`"
//Empty charset later to be added to password
let chars = ""


//Password length
const number = document.getElementById("number").value
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
//If user wants numbers in password
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")
const checkboxes = document.querySelectorAll('input[type="checkbox"')
let checkedOptions = []


//Checking which checkboxes have been checked
if (uppercase.checked){
    chars +=upperLetters
}
if (lowercase.checked){
    chars +=lowerLetters
}
if (numbers.checked){
    chars += numbersArray
}
if (symbols.checked){
    chars += specialSymbols
}
console.log(chars)

for (let i = 0; i < number; i++){
    let randomIndex = Math.floor(Math.random() * chars.length)
    password += chars[randomIndex]
}
generatedPassword.value = password

}


function copyText(){
    generatedPassword.select()
    generatedPassword.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(generatedPassword.value)

    alert("Password copied")
}
