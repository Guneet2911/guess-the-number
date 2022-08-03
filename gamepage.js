// random value generated
var y = Math.floor(Math.random() * 10 + 1 );
  
var guess = 1;

player_name = localStorage.getItem("player_name");

function submit()
{
    var x = document.getElementById("guessField").value; 

    if(x == y)
    {
        alert(" CONGRATULATIONS!!! " +player_name+" YOU GUESSED IT RIGHT IN " +guess+ " GUESS ");
        guess = 1;
    }
    else if(x > y)
    {
        guess++ ;
        alert("OOPS! TRY A SMALLER NUMBER");
    }
    else
    {
        guess++;
        alert("OOPS! TRY A GREATER NUMBER");
    }
}

function playagain()
{
    y = Math.floor(Math.random() * 10 + 1);
    document.getElementById("guessField").innerHTML = "";
}
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user 



