class Player {
    constructor(score, current, affichScore, affichCurrent, name){
        this.score = score;
        this.current = current;
        this.affichScore = affichScore;
        this.affichCurrent = affichCurrent;
        this.name = name;
    }
}
newgame = false;
player1 = new Player(0,0, "scoreP1", "currentP1","joueur 1");
player2 = new Player(0,0, "scoreP2","currentP2", "joueur 2");
players = new Array (player1, player2);


function newGame(){
    if (newgame === false){
    play = players[0];
    document.getElementById(players[0].affichScore).innerHTML = players[0].score = 0;
    document.getElementById(players[1].affichScore).innerHTML = players[1].score = 0;
    document.getElementById(players[0].affichCurrent).innerHTML = players[0].current = 0;
    document.getElementById(players[1].affichCurrent).innerHTML = players[1].current = 0;
    document.getElementById('dice-score').innerHTML = 0;
    document.getElementById('message').style.display = "block";
    document.getElementById('message').innerHTML = "Faites rouler le dé !";
    newgame = true;
    document.getElementById('winner').innerHTML = ""
    
    }else{
        document.getElementById("confirmation").style.display = "block";
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
        number=Math.floor( Math.random() * 100 )+1;
        document.getElementById('dice-score').innerHTML = number;
        if(number === 1){
            play.current=0;
            document.getElementById(play.affichCurrent).innerHTML = play.current;
                if (play === players[0]){
                    play = players[1];
                }else{
                    play = players[0];
                }
                document.getElementById('message').innerHTML = "Perdu ! tour du " + play.name;
            }
            else{
                play.current = play.current+number;
                document.getElementById('message').innerHTML = "Tour du " + play.name;
                document.getElementById(play.affichCurrent).innerHTML = play.current;
                }
        }else 
        document.getElementById('message').innerHTML = "Cliquez d'abord sur new game";
    }


function hold(){
    if (newgame === true){
        if (play.current !==0){
            play.score = play.score + play.current; 
            if (play.score >100){
                document.getElementById('message').style.display = "none";
                document.getElementById('winner').innerHTML = play.name + " a gagné ! félicitations !"
            }
            play.current = 0;
            document.getElementById(play.affichCurrent).innerHTML = play.current;
            document.getElementById(play.affichScore).innerHTML = play.score;
            if (play === players[0]){
                play = players[1];
            }else{
                play = players[0];
            }
            document.getElementById('message').innerHTML = "le score est sauvegardé, tour du " + play.name;

        }else{
            document.getElementById('message').innerHTML = "Vous ne pouvez pas sauvegarder sans lancer le dé";
        }
       
        }else 
            document.getElementById('message').innerHTML = "Cliquez d'abord sur new game";
    }

    










 