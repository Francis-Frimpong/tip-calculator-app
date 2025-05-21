//initial global variable
let billAmount = 0;
let tipPercent = 0;
let numberOfPeople = 1;

//select and store dom element
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


//bill input
billInput.addEventListener('input', () => {
    billAmount = billInput.value
    calculateTip();
})


//linking button click to tip percentage array
const tipPecentage = [5,10,15,25,50]
btnFormsCon.addEventListener('click', (e) => {
    if (e.target.classList.contains('btns') ){
        tipButtons.forEach((button, index) => {
            if(e.target === button){
                tipPercent = tipPecentage[index];
                button.classList.add('activeButton')
                console.log(tipPercent);
            }
            button.classList.add('disabled')
            
        });
    
    }
    calculateTip();
})

//custom tip input 
customTipInput.addEventListener('input', () => {
    tipButtons.forEach((button) => {
        button.classList.add('disabled')
    })
    tipPercent = customTipInput.value;
    calculateTip()
})


//adding focus and blur function to custom field
customField.forEach((field) => {
    field.addEventListener('focus', () => {
        field.classList.add('focusedInput');
    })

    field.addEventListener('blur',() => {
        field.classList.remove('focusedInput');

    })
})

//people input
peopleInput.addEventListener('input', () => {

    if(peopleInput.value < 1){
        errorMessage.classList.add('errorText')
        peopleInput.classList.add('inputError');
    } else{
        errorMessage.classList.remove('errorText');
        peopleInput.classList.remove('inputError');
        numberOfPeople = peopleInput.value;
        calculateTip();
    
    }


})

//Reset button
resetButton.addEventListener('click', () => {
     tipButtons.forEach((button) => {
        button.classList.remove('disabled');
        button.classList.remove('activeButton');
    })

    billInput.value = " ";
    peopleInput.value = " ";
    customTipInput.value = " ";
    tipPercent = 0;
    billAmount = 0;
    numberOfPeople = 1;
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
})


//Calculate tip function
function calculateTip(){
    if(billAmount > 0 && tipPercent > 0 && numberOfPeople > 0){
        let tipAmount = (billAmount * tipPercent / 100) / numberOfPeople;
        let totalAmount = (billAmount / numberOfPeople) + tipAmount;

        tipAmountDisplay.textContent =  `$${tipAmount.toFixed(2)}`;
        totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
    }else {
        tipAmountDisplay.textContent = "$0.00";
        totalAmountDisplay.textContent = "$0.00";
    }
}



    

