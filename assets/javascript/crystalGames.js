// DOM readu
$(document).ready(function(){
  
  // creater variable for win, lost, random result & each crystal values 
  var random_result;
  // variable of wins
  var wins = 0;
  // variable of looses
  var losses = 0;
  // variable of crystal1
  var crystal1;
  // variable of crystal2
  var crystal2;
  // variable of crystal3
  var crystal3;
  // variable of crystal4
  var crystal4;
  // variable of total Score
  var totalScore;
  

// put all crystal in array
  var crystal= [crystal1, crystal2,crystal3,crystal4];
// Math random beetwen 19-120 
random_result = Math.floor(Math.random() * 100) + 20;

 // random number reault
    $("#result").html(random_result);

    for (var i= 0; i <crystal.length ; i++){
// each crystal have random hiden value 1-12
      crystal[i] = Math.floor(Math.random() * 11) + 1;
      console.log(crystal);
    }
 // create function you win     
function youwin(){
  $("#wins").text(wins);
}
// create function you looses
function youlooses(){
  $("#losses").text(losses);
}

  // Here we create the on click event that gets the user"s pick
  $(".crystal-image").on("click", function(event) {
  
    //console.log(event.target.data-crystalscore);
    var crystalValue = Number($(this).attr("data-crystalscore"));
    
    totalScore += crystalValue;
    console.log("Current value:" + totalScore);
    $("#score-adding").html(totalScore);

    // If our current guess number equals the target number..
    if (totalScore === random_result) {
      // Increment wins, restart the game, and update the page.
      wins++;
      startGame();
      youwin();
     
    }
    // If our guess number exceeded our target number...
    else if (totalScore > random_result) {

      // Increment losses, restart the game, and update the page.
      losses++;
      startGame();
      youlooses();
      }
      // console log value of crysatls
  console.log(crystalValue);
  });
  // create funtion to set start Games
  function startGame(){
    totalScore = 0;
    $("#score-adding").text(totalScore);
    $("#crystal1").attr("data-crystalscore", crystal[0]);
    $("#crystal2").attr("data-crystalscore", crystal[1]);
    $("#crystal3").attr("data-crystalscore", crystal[2]);
    $("#crystal4").attr("data-crystalscore", crystal[3]);
    $("win").text(win);
    $("looses").text(looses);
  }
  // Start game over again
  startGame();

 })
  
 