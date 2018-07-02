var totalScore = 0; 
var win = 0; 
var loses = 0; 

var randomNumber = Math.floor((Math.random()*102)+19);
var crystal1 = Math.floor((Math.random() * 13)+1); 
var crystal2 = Math.floor((Math.random() * 13)+1); 
var crystal3 = Math.floor((Math.random() * 13)+1); 
var crystal4 = Math.floor((Math.random() * 13)+1); 


$(document).ready(function () { 
    //Fade in effect in the beginning
    $('div.hidden').fadeIn(1500).removeClass('hidden');

    //Show wins, loses, random number, and total score
    $('#wins').text(win);
    $('#loses').text(loses);
    $('#random-number').text(randomNumber);
    $('#score').text(totalScore);
    

    /*Clicking an image will randomly assign a value to the image and add it to the total score. 
    Also this check if the user has suppased the targeted score.  
    Lastly, we add scores to the lose or win counter if we surpass or reach our goal*/
    $('#ruby').on('click', function () {
        totalScore += crystal1;
        $('#score').text(totalScore);
        if (totalScore > randomNumber) {
            alert("\n\nYou lose! Better luck next time.\n");
            loses++;
            $('#loses').text(loses);
            resetGame();
        } else if (totalScore == randomNumber) {
            alert("\n\nYou win! Nice going.\n"); 
            win++;
            $('#wins').text(win);
            resetGame();
        }
    });

    $('#emerald').on('click', function () {
        totalScore += crystal2;
        $('#score').text(totalScore);
        if (totalScore > randomNumber) {
            alert("\n\nYou lose! Better luck next time.\n");
            loses++;
            $('#loses').text(loses);
            resetGame();
        } else if (totalScore == randomNumber) {
            alert("\n\nYou win! Nice going.\n"); 
            win++;
            $('#wins').text(win);
            resetGame();
        }
    });

    $('#topaz').on('click', function () {
        totalScore += crystal3;
        $('#score').text(totalScore);
        if (totalScore > randomNumber) {
            alert("\n\nYou lose! Better luck next time.\n");
            loses++;
            $('#loses').text(loses);
            resetGame();
        } else if (totalScore == randomNumber) {
            alert("\n\nYou win! Nice going.\n"); 
            win++;
            $('#wins').text(win);
            resetGame();
        }
    });

    $('#carbon').on('click', function () {
        totalScore += crystal4;
        $('#score').text(totalScore);
        if (totalScore > randomNumber) {
            alert("\n\nYou lose! Better luck next time.\n");
            loses++;
            $('#loses').text(loses);
            resetGame();
        } else if (totalScore == randomNumber) {
            alert("\n\nYou win! Nice going.\n"); 
            win++;
            $('#wins').text(win);
            resetGame();
        }
    });

    function resetGame() {
        randomNumber = Math.floor((Math.random()*102)+19);
        crystal1 = Math.floor((Math.random() * 13)+1); 
        crystal2 = Math.floor((Math.random() * 13)+1); 
        crystal3 = Math.floor((Math.random() * 13)+1); 
        crystal4 = Math.floor((Math.random() * 13)+1); 
        totalScore = 0; 
        $('#random-number').text(randomNumber);
    }

});



