function somefunctions(){
 const btn_1 = document.getElementById("button1");
 const btn_2 = document.getElementById("button2");
 const btn_3 = document.getElementById("button3");
 const btn_4 = document.getElementById("button4");
 const btn_5 = document.getElementById("button5");
var mode = 0;
let action;
let lapcounter = 0;
timecounter = 0;
let lapminutes;
let lapseconds;
let lapcentiseconds;
let timeminutes;
let timeseconds;
let timecentiseconds;
let lapnumber = 0;
// when the start button is clicked:
btn_1.addEventListener('click', run);
function run(){
//hide the start button,show stop and lap button
// btn_2.style.display = "inline-block";
btn_4.style.display = "inline-block";
btn_1.style.display = "none";
//stopwatch mode is on
mode = 1;
//start counter
startcounting();
}
// when the stop button is clicked:
btn_4.addEventListener('click', mean);
function mean(){
    //hide stop and lap button, show resume and reset button
    btn_3.style.display = 'inline-block';
    btn_5.style.display = 'inline-block';
    btn_2.style.display = 'none';
    btn_4.style.display = 'none';
//stop counter
clearInterval(action);
}


//when the resume button is clicked:
btn_5.addEventListener('click', yarn);
function yarn(){
  //hide reset and resume button, show stop and lap button  
  btn_3.style.display = 'none';
  btn_5.style.display = 'none';
  btn_4.style.display = 'inline-block';
  btn_2.style.display = 'inline-block';
  // start counter
startcounting();
}

// when the reset button is clicked:
btn_3.onclick = function(){
    // reload page
    location.reload();
}
// when the lap button is clicked:
document.getElementById("button2").onclick = function(){
    //check if the counter is on, if yes add lap details to lap box 
    if(mode){
     clearInterval(action);
     lapcounter = 0;
     startcounting();
     addlap();
    }
 }
function startcounting(){
    action = setInterval(function(){
       timecounter++;
       if(timecounter == 100*60*100){
        timecounter = 0;
       }
       lapcounter++;
       if(lapcounter == 100*60*100){
           
       }
       updatetimer();
       },10);
   }
   function updatetimer(){
    lapminutes =format( Math.floor(lapcounter/6000));
    document.getElementById("lapmin").textContent = lapminutes;
    lapseconds = format(Math.floor((lapcounter%6000)/100));
    document.getElementById("lapsec").textContent = lapseconds;
    lapcentiseconds = format(((lapcounter%6000)%100));
    document.getElementById("lapcentisec").textContent = lapcentiseconds;
    timeminutes = format(Math.floor(timecounter/6000));
    document.getElementById("timemin").textContent = timeminutes;
    timeseconds = format(Math.floor((timecounter%6000)/100));
    document.getElementById("timesec").textContent = timeseconds;
    timecentiseconds = format((timecounter%6000)%100);
    document.getElementById("timecentisec").textContent = timecentiseconds;
   }
   function format(number){
if(number<10){
return '0' + number;
}else{
    return number
}
   }
 function addlap(){
     lapnumber++;
    const node = document.createElement("div");
    const angel = `<div id="cover">
    <div id="like">Lap ${lapnumber}</div>
    <div>
    <span class="hard">:${lapminutes}</span>             <span class="hard">:${lapseconds}</span>             <span class="hard">${lapcentiseconds}</span>
    </div>
    </div>
    `;
    node.innerHTML = angel;
         document.getElementById("lap").appendChild(node);
 }
}



