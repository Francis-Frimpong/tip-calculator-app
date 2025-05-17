const inputBtn = document.querySelectorAll('.btns')

const btnFormsCon = document.querySelector('.inputBtns-forms')

const customField = document.querySelectorAll('input');




customField.forEach((field) => {
    field.addEventListener('focus', () => {
        field.classList.add('focusedInput');
    })

    field.addEventListener('blur',() => {
        field.classList.remove('focusedInput');

    })
})



const tipPecentage = [5,10,15,25,50]



btnFormsCon.addEventListener('click', (e) => {
    if (e.target.classList.contains('btns') ){
        inputBtn.forEach((button, index) => {
            if(e.target === button){
                let linkNum = tipPecentage[index];
                button.classList.add('activeButton')
                console.log(linkNum);
            }
            button.classList.add('disabled')
            
        });
    
    }
})