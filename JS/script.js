class Player {
    constructor(score, current, round){
        this.score = score;
        this.current = current;
        this.round = round;
    }
}
newgame = false;

function newGame(){
    newgame = true;
    player1 = new Player(0,0,false);
    player2 = new Player(0,0,false);
    players = new Array(player1, player2);
    document.getElementById('scoreP1').innerHTML = player1.score;
    document.getElementById('scoreP2').innerHTML = player2.score;
    document.getElementById('currentP1').innerHTML = player1.current;
    document.getElementById('currentP2').innerHTML = player2.current;
    document.getElementById('dice-score').innerHTML = 0;
    document.getElementById('looser').innerHTML = "Faites rouler le dé !";
}




function rollDice(){
    if (newgame === true){
    number=Math.floor( Math.random() * 6 )+1;
    document.getElementById('dice-score').innerHTML = number;
    if(number === 1){
        document.getElementById('looser').innerHTML = "Perdu !";
        player1.current=0;
        player1.round = true;
        document.getElementById('currentP1').innerHTML = player1.current;
    }else{
        player1.current = player1.current+number;
        player1.round=false
        document.getElementById('looser').innerHTML = "Faites roulez le dé !";
        document.getElementById('currentP1').innerHTML = player1.current;
    }
    }else 
        document.getElementById('looser').innerHTML = "Cliquez d'abord sur new game";
}

function hold(){
    if (newgame === true){
    player1.score = player1.score + player1.current; 
    player1.current = 0;
    document.getElementById('currentP1').innerHTML = player1.current;
    document.getElementById('scoreP1').innerHTML = player1.score;
    player1.round = true;
    }else 
        document.getElementById('looser').innerHTML = "Cliquez d'abord sur new game";
    }

    










 