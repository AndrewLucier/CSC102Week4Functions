function countdowntimer(){
    //countdowntimer will go from 50 to 0 by 5s
    console.log("countdowntimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + " sec";

    //45 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 5000);

    //40 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 10000);

    //35 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 15000);

    //30 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 20000);

    //25 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 25000);

    //20 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 30000);

    //15 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 35000);

    //10 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 40000);

    //5 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec";
    }, 45000);

    //0 sec display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = "Blastoff!!!";
    }, 50000);
}
    //a block of resuable code written to perform a specific task
    function playCraps(){
    //troubleshooting playCraps() has started
    console.log("playCraps() started");
    
    //a variable stores the data value that can be changed later on
    var die1 = 0;
    var die2 = 0;

    //Math.ciel rounds up; Math.random returns a pseudo-random # that is greater than or eqaul to 0 and less than 1, can scale to desired range
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());

    //outputs a message to the console
    console.log(die1);
    console.log(die2);
    
    //returns an element object that represents an HTML element
    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result for die2 is: " + die2;

    //check if craps (7 or 11)
    var sum = die1 + die2;
    //If..then statement
    if(sum == 7 || sum == 11){
        console.log("You lose!!!")
        document.getElementById("gameRes").innerHTML = "You did not find victory. Please play again and WIN!";
    }

    //check for win (even doubles)
    //used to specify a new condition if the first condition is false
    else if(die1 % 2 == 0 && die1 == die2){
        console.log("You win!!!")
        document.getElementById("gameRes").innerHTML = "You won!!!";
    }

    //check for tie
    //perform action based on condition
    else{
        console.log("You did not win or lose.")
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again and WIN!";
    }
}