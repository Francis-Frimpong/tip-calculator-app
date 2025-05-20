let billAmount = 0;
let tipPercent = 0;
let numberOfPeople = 1;


const billInput = document.querySelector('.bill');
const tipButtons = document.querySelectorAll('.btns')
const customTipInput = document.querySelector('.fieldInput');
const peopleInput = document.querySelector('.people');
const errorMessage = document.querySelector('.error-msg');
const tipAmountDisplay = document.querySelector('.tip-amt');
const totalAmountDisplay = document.querySelector('.total-amt');
const resetButton = document.querySelector('.reset-btn'); 


const btnFormsCon = document.querySelector('.inputBtns-forms')
const customField = document.querySelectorAll('input')





customField.forEach((field) => {
    field.addEventListener('focus', () => {
        field.classList.add('focusedInput');
    })

    field.addEventListener('blur',() => {
        field.classList.remove('focusedInput');

    })
})


peopleInput.addEventListener('input', () => {

    if(Number(peopleInput.value) < 1){
        document.querySelector('.error-msg').classList.add('errorText')
        peopleInput.classList.add('inputError');
    } else{
        document.querySelector('.error-msg').classList.remove('errorText');
        peopleInput.classList.remove('inputError');
    
    }


})



const tipPecentage = [5,10,15,25,50]
btnFormsCon.addEventListener('click', (e) => {
    if (e.target.classList.contains('btns') ){
        inputBtn.forEach((button, index) => {
            if(e.target === button){
                tipPercent = tipPecentage[index];
                button.classList.add('activeButton')
                console.log(tipPercent);
            }
            button.classList.add('disabled')
            
        });
    
    }

    //convert tip percentage to decimal
//     let calcPercent = tipPercent / 100;
//     console.log(calcPercent);
//     let multiplyByBill = Number(billField) * calcPercent;
//     console.log(calcPercent);

//     //add total(bill) with tip
//     let addBill = Number(billField.value) + calcPercent;
//     console.log(addBill);

let perPerson = (Number(billField.value) * (1 + tipPercent / 100)) / Number(peopleField.value) 

console.log(perPerson);

})


//Tip calculation
// Per person = (Bill × (1 + Tip %)) ÷ Number of people

