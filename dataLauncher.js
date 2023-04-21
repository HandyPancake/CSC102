var timer = 0;
var theTime = "";
var time_interval = 1000;

//this class will hold the UAT space data
class InputData{
    constructor(
        seconds,
        longitude,
        gpsSensor_alt,
        bmpSensors_alt,
        bmpSensors_pres,
        bmpSensors_temp,
        digitalSensor,
        cssSensor_temp,
        cssSensor_eco2,
        cssSensor_tvoc,
        uv,
        accel_x,
        accel_y,
        accel_z,
        magnetic_x,
        magnetic_y,
        magnetic_z,
        gyo_x,
        gyo_y,
        gyo_z,

    ) {
        this.seconds = seconds;
        this.longitude = longitude;
        this.gpsSensor_alt = gpsSensor_alt;
        this.bmpSensors_alt = bmpSensors_alt;
        this.bmpSensors_pres = bmpSensors_pres;
        this.bmpSensors_temp = bmpSensors_temp;
        this.digitalSensor = digitalSensor;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eco2 = cssSensor_eco2;
        this.cssSensor_tvoc = cssSensor_tvoc;
        this.uv = uv;
        this.accel_x = accel_x;
        this.accel_y = accel_y;
        this.accel_z = accel_z;
        this.magnetic_x = magnetic_x;
        this.magnetic_y = magnetic_y;
        this.magnetic_z =magnetic_z;
        this.gyo_x = gyo_x;
        this.gyo_y = gyo_y;
        this.gyo_z = gyo_z;
    }
}

/*
    This function builds the rows of information to disply
    Sample output: <td>Legend: </td><td> units</td>
*/
function dataRow(legend, value, units){
    var txt = "<td>"
    txt += legends;
    txt += ": </td><td>";
    txt += value;
    txt += " " + units;
    txt += "</td>";
    return txt;
}

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

function getData(){
    var loadedData = loadData();
    return loadedData
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

    var timeRead = data[index].time_seconds; 
    var dataTable = document.getAnimations("data");
    
    if (timeRead >+ 10){
        dataTable.rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].seconds, "seconds");
    }
}