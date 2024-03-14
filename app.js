function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    let allowedChars = '';
    if (includeUppercase) {
        allowedChars += uppercaseChars;
    }
    
    if (includeLowercase) {
        allowedChars += lowercaseChars;
    }
    
    if (includeNumbers) {
        allowedChars += numberChars;
    }
    
    if (includeSymbols) {
        allowedChars += symbolChars;
    }
    
    
    let password = '';
    const allowedCharsLength = allowedChars.length;
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharsLength);
        password += allowedChars.charAt(randomIndex);
    }
    return password;
}
function showpsd(){
    const length=parseInt(document.getElementById("lengthpsd").value);
    const includeUppercase=document.getElementById("a1").checked;
    const includeLowercase=document.getElementById("a2").checked;
    const includeNumbers=document.getElementById("a3").checked;
    const includeSymbols=document.getElementById("a4").checked;
    const answer=document.getElementById("answer");
    let pswd=generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    console.log(pswd);
    answer.innerText=pswd
}
