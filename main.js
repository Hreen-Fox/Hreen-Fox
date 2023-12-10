// PANELS
let call = document.getElementById('call');
let block = document.getElementById('block');

// BTN CALL
let closeCall = document.getElementById('closeCall');
let videoCall = document.getElementById('videoCall');
let audioCall = document.getElementById('audioCall');
let cancelCall = document.getElementById('cancelCall');

// BTN BLOCK
let bmenu = document.getElementById('bmenu');
let bTopLeft = document.getElementById('bTopLeft');
let bTopMiddle = document.getElementById('bTopMiddle');
let bTopRight = document.getElementById('bTopRight');
let bMincro = document.getElementById('bMincro');
let bVideo = document.getElementById('bVideo');
let bExit = document.getElementById('bExit');
let count = [0,0];
let timer = document.getElementById('timer');

function Timer(){
    if(count[1] == 60){
        count[0]++;
        count[1] = 0;
    }
    let sec = '';
    let min = '';
    if(count[0] < 10) min = '0' + count[0];
    else min = ''+count[0];
    if(count[1] < 10) sec = '0' + count[1];
    else sec = ''+count[1];
    timer.innerText = min + ":" + sec;
    count[1]++;
};

// EVENTS PANEL
closeCall.addEventListener('click', e=>{
    e.preventDefault();
    call.style.display = 'none';
    setTimeout(function(){call.style.display = 'block';}, 6000);
});
videoCall.addEventListener('click', e=>{
    e.preventDefault();
    call.style.display = 'none';
    block.style.display = 'block';
    setInterval(Timer,1000);
});
audioCall.addEventListener('click', e=>{
    e.preventDefault();
    call.style.display = 'none';
    block.style.display = 'block';
    setInterval(Timer,1000);
});
cancelCall.addEventListener('click', e=>{
    e.preventDefault();
    call.style.display = 'none';
    setTimeout(function(){call.style.display = 'block';}, 6000);
});

// EVENTS BLOCK
bmenu.addEventListener('click', e=>{
    e.preventDefault();
});
bTopLeft.addEventListener('click', e=>{
    e.preventDefault();
    block.style.display = 'none';
});
bTopMiddle.addEventListener('click', e=>{
    e.preventDefault();
});
bTopRight.addEventListener('click', e=>{
    e.preventDefault();
    block.style.display = 'none';
});
bMincro.addEventListener('click', e=>{
    e.preventDefault();
    if(bMincro.style.opacity == 0.5) bMincro.style.opacity = 1;
    else bMincro.style.opacity = 0.5;
});
bVideo.addEventListener('click', e=>{
    e.preventDefault();
});
bExit.addEventListener('click', e=>{
    e.preventDefault();
    block.style.display = 'none';
    setTimeout(function(){call.style.display = 'block';}, 6000);
});
