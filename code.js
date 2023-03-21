function playSound(soundSrc){
    var sound = document.createElement("audio");
    sound.src = soundSrc;
    sound.setAttribute("controls", "auto");
    document.body.appendChild(sound);
    play = function(){
        sound.play();
    }
    stop = function(){
        sound.pause();
    }
}


var arrInterval = new Array();


//empty function; code will be added later
function startButtonClick(){
    //don't let user click the start button while the countodown is running
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;

    var countdownElem = document.getElementById("Countdown");
    runTimer(countdownElem);
}

//empty function; code will be added later
function stopButtonClick(){
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;

    for (counter = 0; counter < 11; counter++){
        clearTimeout(arrInterval[counter]);
    }

}

//This will ask for a first name, last name and badge number
//The names need to be less than 20 characters and the badge number needs to be 3 characters or less
function getUserInput(){
    var fullName = ""
    var badgeNumber = 0;

    do{
        var firstName = prompt("Please enter first name (under 10 characters): ");
        var lastName = prompt("Please enter last name: (under 10 characters)");

        fullName = firstName + " " + lastName;

        if (fullName.length > 20){
            alert("Please enter a shorter name. Lenght was: " + fullName.length);
        }
    }
    while(fullName.length > 20);

    do{
        badgeNumber = prompt("Please enter your badge number (3 digits max): ");

        if(badgeNumber > 999){
            alert("Please enter a badge number with 3 digits or fewer.");
        }
    }
    while(badgeNumber > 999);


    return fullName + " " + badgeNumber;
}



function runTimer(countdownElem){
    //the time
 var currTime = 50;

 //when it starts
 var timeout = 0;

 //how much time between actions
 var timeoutIncrement = 5000;
//This is the thing that makes the loop
 for(var counter=0; counter < 11; counter++){
    arrInterval[counter] = setTimeout(function(){
    if (currTime == 0){
        alert("EXPLOSION!")
        countdownElem.innerHTML = "You Are Dead!!"
    }
//this is the thing that makes the alternative message when under 25
    else if (currTime < 25){
        countdownElem.innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;

    }
    else{
        countdownElem.innerHTML = currTime;
    }

    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;
 
}
}