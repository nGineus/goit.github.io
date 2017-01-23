var text_container = document.querySelector(".time_text");

var start_btn = document.querySelector (".start_btn");
var split_btn = document.querySelector (".split_btn");
var stop_btn = document.querySelector (".stop_btn");

var startDate = new Date();
var curentDate = new Date();
var eTime = 0;

var exit_state = 1;
var pause_state = 0;

function countTime (startTime, curentTime, elapsedTime) {
  return curentTime.getTime() - startTime.getTime() + elapsedTime;
}

function timeToText (elapsed) {
  var elapsed_hours = Math.floor(elapsed/3600000);
  var elapsed_minutes = Math.floor((elapsed-(elapsed_hours*3600000))/60000);
  var elapsed_sec = Math.floor((elapsed-(elapsed_hours*3600000)+(elapsed_minutes*60000))/1000);
  var elapsed_msec = Math.floor(elapsed-((elapsed_hours*3600000)+(elapsed_minutes*60000)+(elapsed_sec*1000)));
  if(elapsed_hours <= 9) elapsed_hours = '0' + elapsed_hours;
  if(elapsed_minutes <= 9) elapsed_minutes = '0' + elapsed_minutes;
  if(elapsed_sec <= 9) elapsed_sec = '0' + elapsed_sec;
  if(elapsed_msec <= 99 && elapsed_msec >9) elapsed_msec = '0' + elapsed_msec;
  if(elapsed_msec <= 9) elapsed_msec = '00' + elapsed_msec;
  return elapsed_hours + ':' + elapsed_minutes + ':' + elapsed_sec + ':' + elapsed_msec;
}

function start_btn_fn() {
  exit_state = 0;
  startDate = new Date();
  start_btn.classList.add('hide');
  split_btn.classList.remove('hide');
  curentDate = new Date();
  console.log('START Count: ', countTime(startDate, curentDate, eTime), ' > String: ', timeToText(countTime(startDate, curentDate, eTime)));
  text_container.innerHTML = timeToText(countTime(startDate, curentDate, eTime));
}

function split_btn_fn() {
   exit_state = 1;
   curentDate = new Date ();
   eTime = countTime(startDate, curentDate, eTime);
   console.log('SPLIT Count: ', eTime, ' > String: ', timeToText(eTime));
   start_btn.classList.remove('hide');
   split_btn.classList.add('hide');
}

function stop_btn_fn() {
   exit_state = 1;
   curentDate = new Date ();
   console.log('STOP:  ' + timeToText (0));
   eTime=0;
   start_btn.classList.remove('hide');
   split_btn.classList.add('hide');
}


start_btn.addEventListener ('click', start_btn_fn);
split_btn.addEventListener ('click', split_btn_fn);
stop_btn.addEventListener ('click', stop_btn_fn);

while (exit_state === 1) {
  console.log('START Count: ', countTime(startDate, curentDate, eTime), ' > String: ', timeToText(countTime(startDate, curentDate, eTime)));
  text_container.innerHTML = timeToText(countTime(startDate, curentDate, eTime));
}

console.log('Done!');
