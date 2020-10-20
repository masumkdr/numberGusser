let chooseNum = document.querySelector("#chooseNum");
let low = 1;
let high = 10;
let correct_ans = Math.floor(Math.random() * (high - low + 1) + low);
chooseNum.innerHTML = `
<p class="text-danger"> Guess a number in between <b>${low}</b> and <b>${high}</b>. Click on Play button to insert your guessed number. </p>
`;

let button = document.querySelector("#playbtn");


button.addEventListener('click', () => {
    var retries = 0;
    
    while(retries < 3) {
        let input = prompt(`Insert your Guessed number in between ${low} and ${high}`);
        if(input > correct_ans) {
            retries++;
            alert("Correct answer is smaller!")
        }  
        else if(input < correct_ans) {
            retries++;
            alert("Correct answer is greater!")
        }
        else if(input == correct_ans) {
            retries++;
            alert("You Won!")
            break;
        }
        alert("You lose!")
    }
    
})