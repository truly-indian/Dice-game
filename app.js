let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;
let gamePlaying;
init()
dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice



let x = document.querySelector('#score-0').textContent

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click' , () => {
    if(gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceDOM =  document.querySelector('.dice')
         diceDOM.style.display = "block";
         diceDOM.src = 'dice-' + dice + '.png'
        
        if(dice !== 1) {
            roundScore += dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        }else {
                nextPlayer()
        }
    }
 
})

document.querySelector('.btn-hold').addEventListener('click' , () => {
    if(gamePlaying) {
      
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    if(scores[activePlayer] >=100 ){
           document.querySelector('#name-' +activePlayer).textContent = 'winner!!'
           document.querySelector('.dice').style.display = 'none'
           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
           gamePlaying = false;
    }
    else{
       nextPlayer()
    }
   

    }

})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0 ;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.querySelector('.dice').style.display = 'none;' 
}
document.querySelector('.btn-new').addEventListener('click' , init)

function init(){
    scores = [0,0]
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player-1'
    document.querySelector('#name-1').textContent = 'Player-2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}