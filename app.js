const inputRef = document.getElementById("input-number");
const errorMessageRef = document.getElementById("error-message");
const btnSubmit = document.getElementById('submit');
const outputRef = document.getElementById('output-text');
const romanObject = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };
  
btnSubmit.addEventListener('click', ()=> {
  inputToRoman(inputRef.value);  
  inputRef.value = ""
})

function inputToRoman(num){
    let number = parseInt(num);
    let result = "";
    outputRef.textContent = "";

    if(num.trim().length == 0){
        errorMessageRef.style.display = "flex";
        errorMessageRef.textContent = "Invalid Input"
        return;
    }
    
    if(number > 4999 || number < 1){
        errorMessageRef.style.display = "flex";
        errorMessageRef.textContent = "Input Out of Range"
        return;
    }

    errorMessageRef.style.display = "none";
    let romanValues = Object.keys(romanObject).reverse();

    romanValues.forEach((key) => {
        while(key <= number){
            number -= key;
            result += romanObject[key];
        }
    })

    outputRef.textContent = result;
}