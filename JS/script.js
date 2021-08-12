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

function newGame(){
    if (newgame === false){
    play = players[0];
    players.forEach(player => {
        $(document.getElementsByClassName(player.id)).fadeIn(500);
        $(document.getElementsByClassName('heading')).fadeIn(500);
        $(document.getElementById('dice')).html("");
        $(document.getElementById(player.affichScore)).html(player.globalScore = 0);
        $(document.getElementById(player.affichCurrent)).html(player.currentScore = 0);
    });
    $(document.getElementById('message')).fadeIn(1000);
    $(document.getElementsByClassName('button')).fadeIn(500);
    $(document.getElementById('message')).show();
    $(document.getElementById('message')).html("Faites rouler le dé !");
    newgame = true;
    
    
    }else{
        $(document.getElementById("confirmation")).show();
    }
}

function restart(){
        newgame = false;
        newGame();
        $(document.getElementById('confirmation')).hide();
        $('#win').removeClass("is-active");
}

function cancel(){
    $(document.getElementById('confirmation')).hide();
    $('#win').removeClass("is-active");

}

function rollDice(){
    if (newgame === true){

        $(document.getElementById('looser')).html("");
        output = '',
        number=Math.floor( Math.random() * 100 )+1;
        output += "&#x268" + (number-1) + "; ";
        $(document.getElementById('dice')).html(output);
        if(number === 1){
            play.currentScore=0;
            $(document.getElementById(play.affichCurrent)).html(play.currentScore);
                if (play === players[0]){
                    play = players[1];
                }
                else{
                    play = players[0];
                }
                $(document.getElementById('looser')).html("Perdu ! au tour du "+play.name);
                $(document.getElementById('message')).html("");
            }
            else{
                play.currentScore = play.currentScore+number;
                $(document.getElementById('message')).html("round du " + play.name +" <br> "+  play.currentScore);
                $(document.getElementById(play.affichCurrent)).html(play.currentScore);
                }
     }
     else 
        $(document.getElementById('message')).html("Cliquez d'abord sur new game");
}
function hold(){
    if (newgame === true){
        if (play.currentScore !==0){
            play.globalScore = play.globalScore + play.currentScore; 
            if (play.globalScore >100){
                $(document.getElementById('message')).hide();
                $('#win').addClass('is-active');
                $(document.getElementById('winner')).html(play.name + " a gagné ! félicitations !");
                newgame=false;
            }
            play.currentScore = 0;
            $(document.getElementById(play.affichCurrent)).html(play.currentScore);
            $(document.getElementById(play.affichScore)).html(play.globalScore);
            if (play === players[0]){
                play = players[1];
            }
            else{
                play = players[0];
            }
            $(document.getElementById('message')).html("Score sauvegardé.<br> Au tour du " + play.name);

        }
        else{
            $(document.getElementById('message')).html("Vous ne pouvez pas sauvegarder sans lancer le dé");
        }
    }
    else 
        $(document.getElementById('message')).html("Cliquez d'abord sur new game");
}
        

 

    










 