//je crée la classe player
class Player {
    constructor(id, globalScore, currentScore, affichScore, affichCurrent, name, animator){
        this.id = id; 
        this.globalScore = globalScore;
        this.currentScore = currentScore;
        this.affichScore = affichScore;
        this.affichCurrent = affichCurrent;
        this.name = name;
        this.animator = animator;
    }
    turn(){
        $(document.getElementsByClassName('tour-joueur')).html("Tour du "+play.name);
    }
    current(){
        $(document.getElementById(play.affichCurrent)).html(play.currentScore);
    }
    global(){
        $(document.getElementById(play.affichScore)).html(play.globalScore);   
    }
    
}
//j'initialise certaines valeurs

newgame = false;
player1 = new Player("player1", 0, 0, "scoreP1", "currentP1", "joueur 1", "name-one");
player2 = new Player("player2", 0, 0, "scoreP2", "currentP2", "joueur 2", "name-two");
players = new Array (player1, player2);
document.getElementById('animation').style.display="none";
//fonction lancement du jeu

function newGame(){
    if (newgame === false){
        $(document.getElementById('animation')).fadeIn(500)
        $(document.getElementsByClassName('deScore')).fadeIn(500);
        $(document.getElementById('name-one')).addClass('selection');
        $(document.getElementById('name-two')).removeClass('selection');
        $(document.getElementsByClassName('rollDice')).addClass('wiggle');
        
        players.forEach(player => {
            play = player;
            $(document.getElementsByClassName(player.id)).fadeIn(500);
            $(document.getElementsByClassName('heading')).fadeIn(500);
            $(document.getElementsByClassName('joueur-name')).fadeIn(500);
            play.globalScore = 0;
            play.currentScore=0;
            player.global();
            player.current();
        });
        play = players[0]
        play.turn()
        $(document.getElementById('message')).fadeIn(1000);
        $(document.getElementsByClassName('button')).fadeIn(500);
        $(document.getElementById('message')).html("Lancez le dé !");
        newgame = true;    
    }else{
        $('#window').addClass('is-active');
        $(document.getElementById('filler')).html(
            "<p>Etes vous sur de vouloir recommencer la partie ?</p>"+
            "<button class=\"restart\" onclick=\"restart()\">oui</button>"+
            "<button class=\"cancel\" onclick =\"cancel()\">non</button>");;
    }
}

//fonction pour redemarrer la partie

function restart(){
    newgame = false;
    newGame();
    $('#window').removeClass("is-active");
}

//function annulation du restart

function cancel(){
    $('#window').removeClass("is-active");

}

//fonction si victoire

function winner(){
    $(document.getElementById('message')).hide();
                    $('#window').addClass('is-active');
                    $(document.getElementById('filler')).html(
                        play.name + " a gagné ! félicitations !"+
                        "<p>Voulez vous rejouer ?</p>"+
                        "<button class=\"restart\" onclick=\"restart()\">oui</button>"+
                        "<button class=\"cancel\" onclick =\"cancel()\">non</button>");
                    newgame=false;
}

//fonction lancement du dé

function rollDice(){
    if (newgame === true){
        $(document.getElementById('message')).removeClass('bigger');
        $(document.getElementById(play.affichScore)).removeClass('bigger');
        $(document.getElementById(play.currentScore)).removeClass('bigger');
        $(document.getElementsByClassName('rollDice')).removeClass('wiggle');
        number=Math.floor( Math.random() * 6)+1;
        for (i = 1; i <= 6; i++) {
            $(document.getElementById('dice1')).removeClass('show-' + i);
            if (number === i) {
                $(document.getElementById('message')).html(number);
                $(document.getElementById('dice1')).addClass('show-' + i);
            }
        }
        if(number === 1){
            play.currentScore=0;
                play.current();
                if (play === players[0]){
                    play = players[1];
                    play.turn();
                    players.forEach(player => {
                        $(document.getElementById(player.animator)).toggleClass('selection')
                        
                    });
                }
                else{
                    play = players[0];
                    players.forEach(player => {
                        $(document.getElementById(player.animator)).toggleClass('selection');
                    });
                    play.turn();
                }
            $(document.getElementById('message')).html("<div style=\"color:white\">"+ "1, Pas de bol...");
            $(document.getElementById('message')).toggleClass('bigger');
        }
        else{
            play.currentScore = play.currentScore+number;
            play.current();
        }
    }
    else{ 
        $(document.getElementById('message')).html("Cliquez d'abord sur new game");
    }
}

//fonction de sauvegarde du score global

function hold(){
    if (newgame === true){
        if (play.currentScore !==0){
                play.globalScore = play.globalScore + play.currentScore; 
                if (play.globalScore >=100){
                    winner();
                }
            play.currentScore = 0;
            play.current();
            play.global();
            $(document.getElementById(play.affichScore)).addClass('bigger');
            if (play === players[0]){
                play = players[1];
                play.turn();
                players.forEach(player => {
                    $(document.getElementById(player.animator)).toggleClass('selection');
                });
            }
            else{
                play = players[0];
                play.turn
                players.forEach(player => {
                    $(document.getElementById(player.animator)).toggleClass('selection');
                });
            }
            $(document.getElementById('message')).html("<div style=\"color:white\">"+"Score sauvegardé");

        }
        else{
            $(document.getElementById('message')).html("Vous devez lancer le dé");
        }
    }
    else 
        $(document.getElementById('message')).html("Cliquez d'abord sur nouvelle partie");
}







        

 

    










 