$(document).ready(function(){
    //code will go here
    // declare variables
    // random number that will range from 19-120
    var randomNumber = "";
    // total amount of player wins
    var wins = 0;
    // total amount of player losses
    var losses = 0;
    // point value of the red crystal. will be random
    var redCrystalValue= "";
    // point value of the blue crystal. will be random
    var blueCrystalValue = "";
    // point value of the yellow crystal. will be random
    var yellowCrystalValue = "";
    // point value of the green crystal. will be random
    var greenCrystalValue = "";
    // player's score as they play the game. they need to match this to the randomNumber to win
    var totalScore = 0;

    function setupGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        redCrystalValue = Math.floor(Math.random() * 12) + 1;
        blueCrystalValue = Math.floor(Math.random() * 12) + 1;
        yellowCrystalValue = Math.floor(Math.random() * 12) + 1;
        greenCrystalValue = Math.floor(Math.random() * 12) + 1;
        $("#random-number").text(randomNumber);
    }

    setupGame();


    $("#red-crystal").on("click", function() {
        // alert("i've been clicked");
        totalScore = redCrystalValue + totalScore;
        $("#total-score").text(totalScore);
        console.log(totalScore);
    });

    $("#blue-crystal").on("click", function() {
        // alert("i've been clicked");
        totalScore = blueCrystalValue + totalScore;
        $("#total-score").text(totalScore);
        console.log(totalScore);
    });


    $("#yellow-crystal").on("click", function() {
        // alert("i've been clicked");
        totalScore = yellowCrystalValue + totalScore;
        $("#total-score").text(totalScore);
        console.log(totalScore);
    });

    $("#green-crystal").on("click", function() {
        // alert("i've been clicked");
        totalScore = greenCrystalValue + totalScore;
        $("#total-score").text(totalScore);
        console.log(totalScore);
    });

    // setupGame();
    console.log(randomNumber);
    console.log(redCrystalValue);
    console.log(blueCrystalValue);
    console.log(yellowCrystalValue);
    console.log(greenCrystalValue);
    // console.log(totalScore);

    
    
});