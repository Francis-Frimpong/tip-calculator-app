const inputBtn = document.querySelectorAll('.btns')

const btnFormsCon = document.querySelector('.inputBtns-forms')



const tipPecentage = [5,10,15,25,50]



btnFormsCon.addEventListener('click', (e) => {
    if (e.target.classList.contains('btns') ){
        inputBtn.forEach((button, index) => {
            if(e.target === button){
                let linkNum = tipPecentage[index]
                console.log(linkNum);
            }
            
        });
    
    }
})