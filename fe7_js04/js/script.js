var text_container = document.querySelector(".time_text");
var split_container = document.querySelector(".split_text");

var start_btn = document.querySelector(".start_btn");
var split_btn = document.querySelector(".split_btn");
var pause_btn = document.querySelector(".pause_btn");
var reset_btn = document.querySelector(".reset_btn");


var startDate = new Date();
var curentDate = new Date();

var timeFn;
var eTime = 0;

var exit_state = 1;
var pause_state = 0;

function countTime() {
    curentDate = new Date();
    text_container.innerHTML = timeToText(curentDate.getTime() - startDate.getTime() + eTime);
}

function timeToText(elapsed) {
    var elapsed_hours = Math.floor(elapsed / 3600000);
    var elapsed_minutes = Math.floor((elapsed - (elapsed_hours * 3600000)) / 60000);
    var elapsed_sec = Math.floor((elapsed - (elapsed_hours * 3600000) + (elapsed_minutes * 60000)) / 1000);
    var elapsed_msec = Math.floor(elapsed - ((elapsed_hours * 3600000) + (elapsed_minutes * 60000) + (elapsed_sec * 1000)));
    if (elapsed_hours <= 9) elapsed_hours = '0' + elapsed_hours;
    if (elapsed_minutes <= 9) elapsed_minutes = '0' + elapsed_minutes;
    if (elapsed_sec <= 9) elapsed_sec = '0' + elapsed_sec;
    if (elapsed_msec <= 99 && elapsed_msec > 9) elapsed_msec = '0' + elapsed_msec;
    if (elapsed_msec <= 9) elapsed_msec = '00' + elapsed_msec;
    return elapsed_hours + ':' + elapsed_minutes + ':' + elapsed_sec + ':' + elapsed_msec;
}

function start_btn_fn() {
    startDate = new Date();
    timeFn = setInterval(countTime, 1);
    curentDate = new Date();
    var newSplit = document.createElement('p');
    newSplit.innerHTML = '<p class="split_text">' + 'Start: ' + timeToText(curentDate.getTime() - startDate.getTime() + eTime) + '</p>';
    split_container.appendChild(newSplit);

    start_btn.classList.add('hide');
    split_btn.classList.remove('hide');
    reset_btn.classList.add('hide');
    pause_btn.classList.remove('hide');
}

function split_btn_fn() {
    curentDate = new Date();

    var newSplit = document.createElement('p');
    newSplit.innerHTML = '<p class="split_text">' + 'Split: ' + timeToText(curentDate.getTime() - startDate.getTime() + eTime) + '</p>';
    split_container.appendChild(newSplit);
}

function pause_btn_fn() {
    clearInterval(timeFn);
    curentDate = new Date();
    var newSplit = document.createElement('p');
    newSplit.innerHTML = '<p class="split_text">' + 'Pause: ' + timeToText(curentDate.getTime() - startDate.getTime() + eTime) + '</p>';
    eTime += curentDate.getTime() - startDate.getTime();
    split_container.appendChild(newSplit);

    start_btn.classList.remove('hide');
    split_btn.classList.add('hide');
    reset_btn.classList.remove('hide');
    pause_btn.classList.add('hide');
}

function reset_btn_fn() {
    eTime = 0;
    text_container.innerHTML = '00:00:00:000';
    split_container.innerHTML = '';
}

start_btn.addEventListener('click', start_btn_fn);
split_btn.addEventListener('click', split_btn_fn);
pause_btn.addEventListener('click', pause_btn_fn);
reset_btn.addEventListener('click', reset_btn_fn);
