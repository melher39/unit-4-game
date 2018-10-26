$(document).ready(function(){
    // global variables
    // random number that will range from 19-120
    var randomNumber;
    // total amount of player wins
    var wins = 0;
    // total amount of player losses
    var losses = 0;
    // point value of the red crystal. will be random
    var redCrystalValue;
    // point value of the blue crystal. will be random
    var blueCrystalValue;
    // point value of the yellow crystal. will be random
    var yellowCrystalValue;
    // point value of the green crystal. will be random
    var greenCrystalValue;
    // player's score as they play the game. they need to match this to the randomNumber to win
    var totalScore = 0;

    // this is how the game will be set up. all numbers are picked at random
    function setupGame() {
        randomNumber = Math.floor(Math.random() * 101) + 19;
        redCrystalValue = Math.floor(Math.random() * 12) + 1;
        blueCrystalValue = Math.floor(Math.random() * 12) + 1;
        yellowCrystalValue = Math.floor(Math.random() * 12) + 1;
        greenCrystalValue = Math.floor(Math.random() * 12) + 1;
        $("#random-number").text(randomNumber);
        $("#total-score").text(totalScore);
    };

    // start the game
    setupGame();

    // when the game is reset, all values but the wins and losses will be reset
    function gameReset() {
        totalScore = 0;
        setupGame();
    };

    // check if the player has won or lost, if not then continue
    function compareScores() {
        // if the player wins, alert them and add to their wins counter, then reset the game
        if (totalScore === randomNumber) {
            alert("You won! :)");
            wins++;
            $("#wins").text(wins);
            gameReset();
        }

        // if the player loses, alert them and add to their losses counter, then reset the game
        else if (totalScore > randomNumber) {
            alert("You lost! :/");
            losses++;
            $("#losses").text(losses);
            gameReset();
        }
    };

    // when the red crystal is clicked, add its value to the totalScore and
    // check if the player has won or lost
    $("#red-crystal").on("click", function() {
        totalScore = redCrystalValue + totalScore;
        $("#total-score").text(totalScore);
        compareScores();
    });

    // when the blue crystal is clicked, add its value to the totalScore and
    // check if the player has won or lost
    $("#blue-crystal").on("click", function() {
        totalScore = blueCrystalValue + totalScore;
        $("#total-score").text(totalScore);
        compareScores();
    });

    // when the yellow crystal is clicked, add its value to the totalScore and
    // check if the player has won or lost
    $("#yellow-crystal").on("click", function() {
        totalScore = yellowCrystalValue + totalScore;
        $("#total-score").text(totalScore);
        compareScores();
    });

    // when the green crystal is clicked, add its value to the totalScore and
    // check if the player has won or lost
    $("#green-crystal").on("click", function() {
        totalScore = greenCrystalValue + totalScore;
        $("#total-score").text(totalScore);
        compareScores();
    });
    
});