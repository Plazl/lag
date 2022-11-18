class Lag { 
   constructor(random1, random2) {
    this.random1 = random1;
    this.random2 = random2;
  }
}
var battery1;
var level;
var levelStr;
var levelperc;
var lag
function batteryPercent() {
  navigator.getBattery().then(function(battery) {

    level = battery.level;
    levelStr = level.toString()
    levelperc = levelStr.substring(levelStr.indexOf('.')+1)
    document.getElementById("batteryPerc").innerHTML = levelperc+"%"
});
}
function burnBattery() {
 while (1==1) {
   lag+=2;
     document.getElementById("lag").innerHTML = lag *= Math.acosh(lag+Math.random(22)*4)/lag
 }
}
setInterval(function(update) {
 batteryPercent();
 burnBattery();
}, 1000)
