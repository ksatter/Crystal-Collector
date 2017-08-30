//when document loaded
$(document).ready(function() {
    // Set global Variables
    var wins = 0;
    var losses = 0;
    var targetScore = 0;
    var userScore = 0;
    var crystalValues = [];
    var crystalImages = [];
    //Random number generator for target score and crustal values
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //Start new game
    newGame();

    //Create target score and update text
    function newGame() {
        userScore = 0;
        // Create target score between 50 and 75nj
        targetScore = randomNumber(19, 120);
        $("#current-score").text(userScore);
        $("#target-score").text(targetScore);
        $("#player-wins").text(wins);
        $("#player-losses").text(losses);

        createCrystals();

        $(".gem").click(function () {
            var pointIncrease = parseInt($(this).attr("value"));
            userScore = userScore + pointIncrease;
            $("#current-score").text(userScore);
            //win
            if (userScore === targetScore) {
                wins++;

                $("#last-target").text(targetScore);
                $("#last-result").text('won');
                $('#last-score').text(userScore);
                $('#previous-results').show();

                newGame();
            }
            //lose
            else if (userScore > targetScore) {
                losses++;

                $("#last-target").text(targetScore);
                $("#last-result").text('lost');
                $('#last-score').text(userScore);
                $('#previous-results').show();

                newGame();

            }
        });


    }
    //Create crystals and assigns each a value
    function createCrystals() {
        $(".crystals").html('');
        crystalValues = [];
        crystalImages = ['assets/images/diamond.png', "assets/images/ruby.png", "assets/images/sapphire.png", "assets/images/topaz.png"];

        for (var x = 1; x <= crystalImages.length;) {
            //create random value between 5 and 15
            var newNumber = randomNumber(1, 12);
            //verify that number is not already assigned and push to array until there is a number for every crystal
            if (crystalValues.indexOf(newNumber) < 0) {
                crystalValues.push(newNumber);
                x++;
            }
        }
        //create crystals using images and values, assign appropriate classes for styling
        for (var i = 0; i < crystalValues.length; i++) {
            var newCrystal = $('<img>');
            newCrystal.attr('value', crystalValues[i]);
            newCrystal.attr('src', crystalImages[i]);
            newCrystal.attr('alt', 'crystal;');
            newCrystal.addClass('gem');
            //insert into html
            $('.crystals').append(newCrystal);
        }
    }
    //add value of crystal to score, determine game result and update accordingly



    //clear wins and losses and start over
    function reset() {
        wins = 0;
        losses = 0;
        $('#previous-results').hide();

        newGame();

    }
    //trigger reset with button
    $("#reset").click(function(){
        reset()
    });




    console.log(userScore);

})


