class Player {
    constructor(id, globalScore, currentScore, affichScore, affichCurrent, name){
        this.id = id; 
        this.globalScore = globalScore;
        this.currentScore = currentScore;
        this.affichScore = affichScore;
        this.affichCurrent = affichCurrent;
        this.name = name;
    }
}
newgame = false;
player1 = new Player("player1", 0, 0, "scoreP1", "currentP1", "joueur 1");
player2 = new Player("player2", 0, 0, "scoreP2", "currentP2", "joueur 2");
players = new Array (player1, player2);
if (play = null){
    document.getElementById('message').innerHTML = "Cliquez d'abord sur New Game";
}
document.getElementById('winner').style.display="none";

function newGame(){
    if (newgame === false){
    play = players[0];
    players.forEach(player => {
        $(document.getElementsByClassName(player.id)).fadeIn(500);
        $(document.getElementsByClassName('heading')).fadeIn(500);
        $(document.getElementById('message')).fadeIn(1000);
        $(document.getElementsByClassName('button')).fadeIn(500);
        document.getElementById('dice').innerHTML = "";
        document.getElementById(player.affichScore).innerHTML = player.globalScore = 0;
        document.getElementById(player.affichCurrent).innerHTML = player.currentScore = 0
    });
    document.getElementById('message').style.display = "block";
    document.getElementById('message').innerHTML = " Faites rouler le dé !";
    newgame = true;
    
    
    }else{
        document.getElementById("confirmation").style.display = "inline";
    }
}

function restart(){
        newgame = false;
        newGame();
        document.getElementById('confirmation').style.display="none";

}

function cancel(){
    document.getElementById('confirmation').style.display="none";
}

function rollDice(){
    if (newgame === true){
        document.getElementById('looser').innerHTML = "";
        output = '',
        number=Math.floor( Math.random() * 6 )+1;
        output += "&#x268" + (number-1) + "; ";
        document.getElementById('dice').innerHTML = output;
        if(number === 1){
            play.currentScore=0;
            document.getElementById(play.affichCurrent).innerHTML = play.currentScore;
                if (play === players[0]){
                    play = players[1];
                }
                else{
                    play = players[0];
                }
                document.getElementById('looser').innerHTML = "Perdu ! au tour du "+play.name;
                document.getElementById('message').innerHTML = ""
            }
            else{
                play.currentScore = play.currentScore+number;
                document.getElementById('message').innerHTML = "round du " + play.name +" <br> "+  play.currentScore;
                document.getElementById(play.affichCurrent).innerHTML = play.currentScore;
                }
     }
     else 
        document.getElementById('message').innerHTML = "Cliquez d'abord sur new game";
}
function hold(){
    if (newgame === true){
        if (play.currentScore !==0){
            play.globalScore = play.globalScore + play.currentScore; 
            if (play.globalScore >100){
                document.getElementById('message').style.display = "none";
                document.getElementById('winner').style.display="flex";
                document.getElementById('winner').innerHTML = play.name + " a gagné ! félicitations !"
            }
            play.currentScore = 0;
            document.getElementById(play.affichCurrent).innerHTML = play.currentScore;
            document.getElementById(play.affichScore).innerHTML = play.globalScore;
            if (play === players[0]){
                play = players[1];
            }
            else{
                play = players[0];
            }
            document.getElementById('message').innerHTML = "Score sauvegardé.<br> Au tour du " + play.name;

        }
        else{
            document.getElementById('message').innerHTML = "Vous ne pouvez pas sauvegarder sans lancer le dé";
        }
    }
    else 
        document.getElementById('message').innerHTML = "Cliquez d'abord sur new game";
}
        

 

    










 