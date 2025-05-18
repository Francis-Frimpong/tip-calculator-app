const inputBtn = document.querySelectorAll('.btns')

const btnFormsCon = document.querySelector('.inputBtns-forms')

const customField = document.querySelectorAll('input');
const fieldInput = document.querySelector('fieldInput');
const peopleField = document.querySelector('.people');
const billField = document.querySelector('.bill');




customField.forEach((field) => {
    field.addEventListener('focus', () => {
        field.classList.add('focusedInput');
    })

    field.addEventListener('blur',() => {
        field.classList.remove('focusedInput');

    })
})


peopleField.addEventListener('input', () => {

    if(Number(peopleField.value) < 1){
        document.querySelector('.error-msg').classList.add('errorText')
        peopleField.classList.add('inputError');
    } else{
        document.querySelector('.error-msg').classList.remove('errorText');
        peopleField.classList.remove('inputError');
    
    }


})



const tipPecentage = [5,10,15,25,50]
let tipPercent;



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
    let calcPercent = tipPercent / 100;
    console.log(calcPercent);
    let multiplyByBill = Number(billField) * calcPercent;
    console.log(calcPercent);

    //add total(bill) with tip
    let addBill = Number(billField.value) + calcPercent;
    console.log(addBill);


})


//Tip calculation
// Per person = (Bill × (1 + Tip %)) ÷ Number of people

