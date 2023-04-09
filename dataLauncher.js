var timer = 0;
var theTime = "";
var time_interval = 1000;



function start(){
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disable = true;
    document.getElementById("stopButton").disable = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disable = false;
    document.getElementById("stopButton").disable = true;
}

function updateDisplay(){
    theTime = new Date();
    var theMinutes = theTime.getMinutes();
    if (theMinutes <10){
        theMinutes = "0" + String(theMinutes);
    }
    var theSeconds = theTime.getSeconds() < 10 ? + "0" + String(theTime.getSeconds()) : theTime.getSeconds(); 
    var timeFormat = theTime.getHours() +":" + theMinutes + ":" + theSeconds;


    document.getElementById("timeStamp").innerHTML = timeFormat;

}