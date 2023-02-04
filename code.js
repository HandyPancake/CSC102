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

 setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;

setTimeout(function(){
    countdownElem.innerHTML = currTime;
    currTime = currTime - 5;
}, timeout);
timeout = timeout + timeoutIncrement;


// This happens when it hits zero
setTimeout(function(){
    alert("EXPLOSION!")
    countdownElem.innerHTML = "You Are Dead!!"
}, timeout);
timeout = timeout + timeoutIncrement;

}