const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//get date from the browser
var date = new Date ();
console.log (date);

// extrapolate hour, minute and seconds of the day fom the browser
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log ( "Hour:"+ hr + " Minutes:" + min + " Second:" + sec);

//  break down the 360deg of the clock to figure positioning

let hrPosition = hr*360/12 + min*(360/60)/12;
let minPosition = min*360/60 + (sec*(360/60)/60);
let secPosition = sec*360/60;


/*once you get the inital time from the browswer, use math to run the clock*/
function tellTime(){

hrPosition = hrPosition + (3/360);
minPosition = minPosition + (6/60);
secPosition = secPosition + 6;


  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"

}

setInterval(tellTime,1000);
