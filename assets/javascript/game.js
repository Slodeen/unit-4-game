//computer random pick up
comPick = Math.floor(Math.random() * 100) +20;
$("#num").html(comPick);
//console.log(comPick);


var crystal1 = Math.floor(Math.random() * 30);
var crystal2 = Math.floor(Math.random() * 30);
var crystal3 = Math.floor(Math.random() * 30);
var crystal4 = Math.floor(Math.random() * 30);
//console.log(crystal2);

var userScore = 0;
var wins = 0;
var loss = 0;

$("#score").html(userScore);
$("#win").html(wins);
$("#loss").html(loss);

//reseting the game 
function reset(){
var comPick = Math.floor(Math.random() * 30);
crystal1 = Math.floor(Math.random() * 30);
crystal2 = Math.floor(Math.random() * 30);
crystal3 = Math.floor(Math.random() * 30);
crystal4 = Math.floor(Math.random() * 30);
var userScore = 0;

$("#score").html(userScore);
}

//adding win and loss

function win(){
    alert("You win!");
    wins++
    $("#win").html(wins);
    reset();
}

function lost(){
    alert("You lost!");
    loss++
    $("#loss").html(loss);
    reset();
}

//assigning crystals
$("#crystal1").on('click', function(){
    userScore = userScore + crystal1
    console.log(userScore);
    $("#score").html(userScore);

    if(userScore == comPick){
        win();
    } else if(userScore > comPick){
        lost();
    }});

$("#crystal2").on('click', function(){
    userScore = userScore + crystal2
    console.log(userScore);
    $("#score").html(userScore);

    if(userScore == comPick){
        win();
    } else if(userScore > comPick){
        lost();
    }});

$("#crystal3").on('click', function(){
    userScore = userScore + crystal3
    console.log(userScore);
    $("#score").html(userScore);

    if(userScore == comPick){
        win();
    } else if(userScore > comPick){
        lost();
    }});

    $("#crystal4").on('click', function(){
    userScore = userScore + crystal4
    console.log(userScore);
    $("#score").html(userScore);

    if(userScore == comPick){
        win();
    } else if(userScore > comPick){
        lost();
    }});

    