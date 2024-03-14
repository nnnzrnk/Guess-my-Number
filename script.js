let secretNumber = Math.trunc(Math.random() * 21); // округляє до цілого та обирає рандомне число від 1 до 20
let score = 20; 
let highscore = 0;

const message = (text) => {
    document.querySelector('.message').textContent = text
}

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value) // треба, щоб було в функції Number, для того щоб воно розпізнавало число, яке було введене
   // різні розвитки подій для різних ситуацій
   //якщо поле вводу пусте
    if (!guess) {
        message('NAN')
    } 
    // якщо гравець вгадав число
    else if (guess === secretNumber){
         message('Correct!')

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem'

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    
    else if (guess !== secretNumber ) {
        if (score > 1){
            message(guess > secretNumber ? 'Too high!' : 'Too low!' );
            score -= 1;
            document.querySelector('.score').textContent = score
        } else {
            message( 'You lost the game...');
            document.querySelector('.score').textContent = 0
        }
        
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 21); 
    
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    message('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
})


