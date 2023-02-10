//empty function; code will be added later
function startButtonClick(){}

//empty function; code will be added later
function stopButtonClick(){}


function runTimer(countdownElem){
    //the time
 var currTime = 50;

 //when it starts
 var timeout = 0;

 //how much time between actions
 var timeoutIncrement = 5000;

 for(var counter=0; counter < 11; counter++){
 setTimeout(function(){
    if (currTime == 0){
        alert("EXPLOSION!")
        countdownElem.innerHTML = "You Are Dead!!"
    }

    else if (currTime <25){
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