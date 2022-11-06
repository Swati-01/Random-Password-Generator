const characters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let generatedPswd = document.getElementById("generated-pswd")
let generatedPswd2 = document.getElementById("generated-pswd2")

function pswdCreate() {
    var password = []
    for (let i = 0; i < 15; i++) {
        let pswd = characters[Math.floor(Math.random() * characters.length)]
        password.push(pswd)
    }
    let psword = password.join("")
    generatedPswd.textContent = psword
    
    
    var password2 = []
    for (let i = 0; i < 15; i++) {
        let pswd2 = characters[Math.floor(Math.random() * characters.length)]
        password2.push(pswd2)
    }
    let psword2 = password2.join("")
    generatedPswd2.textContent = psword2
}


