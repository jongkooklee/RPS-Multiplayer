var database = firebase.database();

var playerOneName = "";
var playerTwoName = "";
var playerOneWins = 0;
var playerOneLosses = 0;
var playerTwoWins = 0;
var playerTwoLosses = 0;

$("#namebutton").on("click", function() {

    database.ref().set({
      playerOne: {
        name: playerOneName,
        wins: playerOneWins,
        losses: playerOneLosses},
      playerTwo: {
        name: playerTwoName,
        wins: playerTwoWins,
        losses: playerTwoLosses}
    });

    database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
       if (snapshot.child("playerOne").exists()) {
          var playerTwoName = $("#name").val().trim();
          $("#player2").empty();
          $("#player2").append(snapshot.val().playerTwo.name + "<br>");
          $("#player2").append("WINS: " + snapshot.val().playerTwo.wins + "<br>");
          $("#player2").append("LOSSES: " + snapshot.val().playerTwo.losses + "<br>");
          $("#player2").append("ROCK" + "<br>");
          $("#player2").append("PAPER" + "<br>");
          $("#player2").append("SCISSORS" + "<br>");

       } else {
          var playerOneName = $("#name").val().trim();
          $("#player1").empty();
          $("#player1").append(snapshot.val().playerOne.name + "<br>");
          $("#player1").append("WINS: " + snapshot.val().playerOne.wins + "<br>");
          $("#player1").append("LOSSES: " + snapshot.val().playerOne.losses + "<br>");
          $("#player1").append("ROCK" + "<br>");
          $("#player1").append("PAPER" + "<br>");
          $("#player1").append("SCISSORS" + "<br>");
      };
    });
});

  //1. check if there is a player 1 child, if not, then set to player1 firebase. if ther eis then set to player 2 firebase and display name in player1 or 2 div
  //2. if they both exist, then start game.
      //3. in start game, append rock paper, scissor. 

  // if (snapshot.child("playerOne").exists()) {

  //       playerTwo = snapshot.val().playerTwo;

  //       $("#player1").text();
  //       $("#highest-prices").text(highPrice);

  //       console.log(snapshot.val());
  // }
