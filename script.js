const timedisplay = document.querySelector("#time h1");
const lapdisplay = document.querySelector("#lapdisplay");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update,10)
        isrunning = true;
    }
}
function stop(){
    if(isrunning){
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isrunning = false;
    }
}
function reset(){
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isrunning = false;
    timedisplay.textContent = "00:00:00:00";
    lapdisplay.innerHTML = "";
}
function lap(){
    if(isrunning){
        const currenttime = Date.now();
        const laptime = currenttime - starttime;
        let hours = Math.floor(laptime/(1000 * 60 * 60));
        let minutes = Math.floor(laptime/(1000 * 60) % 60);
        let seconds = Math.floor(laptime/1000 % 60);
        let millisecond = Math.floor(laptime % 1000 / 10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        millisecond = String(millisecond).padStart(2,"0");

        const lapText = `${hours}:${minutes}:${seconds}:${millisecond}`;
        const lapElement = document.createElement("h1");
        lapElement.style.backgroundColor = "rgb(186, 214, 230";
        lapElement.style.width = "450px";
        lapElement.style.display = "flex";
        lapElement.style.justifyContent = "center";
        lapElement.style.alignItems = "center";
        lapElement.style.borderRadius = "10px";
        lapElement.style.padding = "10px";
        lapElement.style.margin = "5px";
        lapElement.textContent = lapText;
        lapdisplay.appendChild(lapElement);
    }
}
function update(){
    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;

    let hours = Math.floor(elapsedtime/(1000 * 60 * 60));
    let minutes = Math.floor(elapsedtime/(1000 * 60) % 60);
    let seconds = Math.floor(elapsedtime/1000 % 60);
    let millisecond = Math.floor(elapsedtime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    millisecond = String(millisecond).padStart(2,"0");

    timedisplay.textContent = `${hours}:${minutes}:${seconds}:${millisecond}`;
}
