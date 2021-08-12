class Player {
    constructor(globalScore, currentScore, affichScore, affichCurrent, name){
        this.globalScore = globalScore;
        this.currentScore = currentScore;
        this.affichScore = affichScore;
        this.affichCurrent = affichCurrent;
        this.name = name;
    }
}
newgame = false;
player1 = new Player(0,0, "scoreP1", "currentP1","joueur 1");
player2 = new Player(0,0, "scoreP2","currentP2", "joueur 2");
players = new Array (player1, player2);
if (play = null){
    document.getElementById('message').innerHTML = "Cliquez d'abord sur New Game";
}


function newGame(){
    if (newgame === false){
    play = players[0];
    document.getElementById(players[0].affichScore).innerHTML = players[0].globalScore = 0;
    document.getElementById(players[1].affichScore).innerHTML = players[1].globalScore = 0;
    document.getElementById(players[0].affichCurrent).innerHTML = players[0].currentScore = 0;
    document.getElementById(players[1].affichCurrent).innerHTML = players[1].currentScore = 0;
    document.getElementById('message').style.display = "block";
    document.getElementById('message').innerHTML = " Faites rouler le dé !";
    newgame = true;
    document.getElementById('winner').innerHTML = "";
    
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
                }else{
                    play = players[0];
                }
                document.getElementById('looser').innerHTML = "Perdu ! au tour du "+play.name;
                document.getElementById('message').innerHTML = ""
            }
            else{
                play.currentScore = play.currentScore+number;
                document.getElementById('message').innerHTML = "Tour du " + play.name;
                document.getElementById(play.affichCurrent).innerHTML = play.currentScore;
                }
        }else 
        document.getElementById('message').innerHTML = "Cliquez d'abord sur new game";
    }
function hold(){
    if (newgame === true){
        if (play.currentScore !==0){
            play.globalScore = play.globalScore + play.currentScore; 
            if (play.globalScore >100){
                document.getElementById('message').style.display = "none";
                document.getElementById('winner').innerHTML = play.name + " a gagné ! félicitations !"
            }
            play.currentScore = 0;
            document.getElementById(play.affichCurrent).innerHTML = play.currentScore;
            document.getElementById(play.affichScore).innerHTML = play.globalScore;
            if (play === players[0]){
                play = players[1];
            }else{
                play = players[0];
            }
            document.getElementById('message').innerHTML = "le score est sauvegardé. Au tour du " + play.name;

        }else{
            document.getElementById('message').innerHTML = "Vous ne pouvez pas sauvegarder sans lancer le dé";
        }
        }else 
            document.getElementById('message').innerHTML = "Cliquez d'abord sur new game";
    }
        

 

    










 