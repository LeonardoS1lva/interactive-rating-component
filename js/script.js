const tagSelectedNumber = document.getElementById('selected-number');
const btnSubmit = document.getElementById('btn-submit');
const submitSection = document.querySelector('.submit-section');
const thanksSection = document.querySelector('.thanks-section');

function insert(num){
    for (let i = 1; i < 6; i++) {
        let number = document.querySelector("body > section.submit-section > ul > li:nth-child("+i+")");
        if (i !== num) {
            number.classList.remove('active-numbers');
        } else {
            tagSelectedNumber.innerHTML = num;
            number.classList.toggle('active-numbers');
        }
    }
}

btnSubmit.addEventListener("click", () => {
    submitSection.classList.add('change-section');
    thanksSection.classList.remove('change-section');
});