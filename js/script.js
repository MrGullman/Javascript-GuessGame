(function(){
  "use strict";
  
    var state = document.getElementById('s-state');
    var hideState = document.getElementById('s-state');
    var hideLevel = document.getElementById('setLevel');
  
//------------------------------------------------------------------------------------- 
    
  
  document.addEventListener('DOMContentLoaded', function(){

  
    
//----- HIDE ELEMENT --------------------------------------------------------------------------------   
    
    
    
    document.getElementById('s-state').style.display = 'none';
    document.getElementById('setLevel').style.display = 'none';
    document.getElementById('gameOn').style.display = 'none';
    
    
      
//-------------------------------------------------------------------------------------   
    
    var guesses = document.getElementById('guesses');
    var guessField = document.getElementById('guessField');
    var btnSetLevel = document.getElementById('setLevel');
    var btnGameOn = document.getElementById('gameOn');
    var btnSetNumber = document.getElementById('u-number-submit');
    var textField = document.getElementById('text');
    var upperNumber;
    var randomNumber = 0;
    var gamesPlayed = 0;  
    var level;

      
      
//-------------------------------------------------------------------------------------    
    
    
    btnSetLevel.disabled = true;
    
    state.addEventListener('change', function(){
      
      if (state.value === ''){
      btnSetLevel.disabled = true;
      } else {
        btnSetLevel.disabled = false;
      }
      
    }); //end state eventListener

      
    
    
      
//----- FUNKTIONER --------------------------------------------------------------------------------    

    
    
      function setUNumber(){
        upperNumber = Number(document.getElementById('u-number').value);
        console.log(upperNumber);
        var randomNumber = Math.floor(Math.random() * upperNumber ) +1;
        console.log(randomNumber);
        document.getElementById('u-number').style.display = 'none';
        document.getElementById('u-number-submit').style.display = 'none';
        document.getElementById('s-state').style.display = '';
        document.getElementById('setLevel').style.display = '';
      }
    
    
      
    function setLevel(){
      
      if (state.selectedIndex === 1){
        console.log('Level 1');
        document.getElementById('text').innerHTML = "LEVEL 1!";
        level = 1;
        hideState.style.display = 'none';
        hideLevel.style.display = 'none';
        document.getElementById('gameOn').style.display = '';
      }else if (state.selectedIndex === 2){
        console.log('Level 2');
        document.getElementById('text').innerHTML = "LEVEL 2!";
        level = 2;
        hideState.style.display = 'none';
        hideLevel.style.display = 'none';
        document.getElementById('gameOn').style.display = '';
      }else if (state.selectedIndex === 3){
        console.log('Level 3');
        document.getElementById('text').innerHTML = "LEVEL 3!";
        level = 3;
        hideState.style.display = 'none';
        hideLevel.style.display = 'none';
        document.getElementById('gameOn').style.display = '';
      }else if (state.selectedIndex === 4){
        console.log('Level 4');
        document.getElementById('text').innerHTML = "LEVEL 4!";
        level = 4;
        hideState.style.display = 'none';
        hideLevel.style.display = 'none';
        document.getElementById('gameOn').style.display = '';
      }else if (state.selectedIndex === 5){
        console.log('Level 5');
        document.getElementById('text').innerHTML = "LEVEL 5!";
        level = 5;
        hideState.style.display = 'none';
        hideLevel.style.display = 'none';
        document.getElementById('gameOn').style.display = '';
      }else{
      
      }
    }
    
     
    function gameOn(){
      
      if(upperNumber > 5){
        document.getElementById('text').innerHTML = " Nu Spelar vi LEVEL 1!";
      }
    }

    

//---------- PLAY GAME ---------------------------------------------------------------------------    
    

    function checkGuess(){
      var userGuess = Number(guessField.value);
      guesses.innerHTML += userGuess + ", ";
      
      
      guessField.value = "";
    }

    
    
    
//----- BUTTONS --------------------------------------------------------------------------------
     
    btnSetNumber.onclick = setUNumber;
    btnSetLevel.onclick = setLevel;
    btnGameOn.onclick = checkGuess;
    
    
      
    
      
      
   }); //end documenteventListener
})();
