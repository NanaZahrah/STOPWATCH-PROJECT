let [hours,minutes,seconds,milliseconds]=[0,0,0,0];
let display=document.getElementById("display");
let timer=null;
let lapsContainer=document.getElementById("laps");

//Buttons
document.getElementById("start").addEventListener("click",startTimer);
document.getElementById("stop").addEventListener("click",stopTimer);
document.getElementById("reset").addEventListener("click",resetTimer);
document.getElementById("lap").addEventListener("click",addLap);
document.getElementById("theme-toggle").addEventListener("click",toggleTheme);

//stopatch functions
function stopwatch() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds =0;
        seconds++;
        if (seconds==60) {
            seconds=0;
            minutes++;
            if (minutes==60) {
                minutes=0;
                hours++;
            }
        }
}
    
let h=hours<10? "0"+hours:hours;
let m=minutes <10 ? "0" + minutes:minutes;
let s =seconds <10 ? "0" + seconds: seconds;
let ms=milliseconds <100 ? (milliseconds <10? "00"+ milliseconds: "0"+milliseconds) : milliseconds;

display.innerText = `${h}:${m}:${s}:${ms}`;

    }

    //start
    function startTimer() {
        if (timer !== null) clearInterval(timer);
        timer = setInterval(stopwatch, 10);
    }

    //stop
    function stopTimer() {
        clearInterval(timer);
    }

    //Reset
    function resetTimer() {
        clearInterval(timer);
        [hours, minutes, seconds, milliseconds] = [0,0,0,0];
        display.innerText = "00:00:00:000";
        lapsContainer.innerHTML = ""; 
    }

    //Lap
    function addLap() {
        if (hours + minutes + seconds + millliseconds === 0) return; //ignore if 0
        let li = document.createElement("li");
        li.innerText = display.innerText;
        lapsContainer.appendChild(li);
    }

    //Theme Toggle
    function toggleTheme() {
        Document.body.classList.toggle("light");
    }

