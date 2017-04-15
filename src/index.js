var scores, roundScores, activePlayer, gamePlaying;
init();

//roll btn
document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
	  //random number
	  var dice = Math.floor(Math.random() * 6 ) + 1;

	  //display corresponding dice pic
	  var diceDOM = document.querySelector('.dice');
	  diceDOM.style.display = 'block';
	  diceDOM.src = 'dice-' + dice + '.png';

	  //Update round score IF the roll # is not a 1
	  if(dice !== 1) {
	  	roundScore += dice;
	  	document.getElementById('current-' + activePlayer).textContent = roundScore;
	  } else {
		  nextPlayer();
		  }
	  }
});

//hold btn
document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying) {
		//update global score
		scores[activePlayer] += roundScore;
	
		//display score
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
	
		//winner winner chicken dinner
		if(scores[activePlayer] >= 10) {
			gamePlaying = false;
			document.getElementById('name-' + activePlayer).textContent = 'Winner';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer+ '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer+ '-panel').classList.remove('active');
		} else {
			nextPlayer();
		}   
	}
});

function nextPlayer() {

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	//resets curent score at begining of each round
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  //switches acitve panel at begining of each round
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	gamePlaying = true;
	activePlayer = 0;
	roundScore = 0;
	scores = [0,0];

	//removes dice image
	document.querySelector('.dice').style.display = 'none';

	//initial score set to 0
	document.getElementById('score-0').innerHTML = 0;
	document.getElementById('score-1').innerHTML = 0;
	document.getElementById('current-0').innerHTML = 0;
	document.getElementById('current-1').innerHTML = 0;
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-' + activePlayer+ '-panel').classList.remove('winner');

	document.querySelector('.player-' + activePlayer+ '-panel').classList.remove('active');
	// document.querySelector('.player-0-panel').classList.remove('winner');
	// document.querySelector('.player-1-panel').classList.remove('winner');
	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

