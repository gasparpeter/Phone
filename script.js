let phoneContainer = document.getElementById('phone-container');
let screenContainer = document.getElementById('screen-container');
let pinContainer = document.getElementById('pin');
let utasitas = document.getElementById('text');
let input = document.getElementById('inputka');
let homeBtn = document.getElementById('home-btn');
let doneBtn = document.getElementById('done');
let homeScreen = document.getElementById("home-screen");
let powerBtn = document.getElementById('powerBtn');
let musicScreen = document.getElementById('music-screen');
let akph = document.getElementById('akph');
let back = document.getElementById('music-back');

let telephone = document.getElementById('telephone');
let safari = document.getElementById('safari');
let music = document.getElementById('music');
let messages = document.getElementById('messages');

var audio = new Audio('iPhonelock.mp3');

var audio2 = new Audio('nekemtene.mp3');

let passcode = "akph";

homeBtn.addEventListener('click', function () {
   pinContainer.style.display = 'block';
});



doneBtn.addEventListener('click', function () {
   if (input.value === passcode) {
       pinContainer.style.display = 'none';
       homeScreen.style.display = 'block';
       topItems();
   }else {
       input.style.border = '1px solid red'
   }
});

powerBtn.addEventListener('click', function () {
   pinContainer.style.display = 'none';
   homeScreen.style.display = 'none';
   input.value = null;
   musicScreen.style.display = 'none';
   musicScreen.style.display = 'none';
    audio.play();
    audio2.pause();
});

function topItems() {
    telephone.style.display = 'inline-block';
    safari.style.display = 'inline-block';
    music.style.display = 'inline-block';
    messages.style.display = 'inline-block';
}

function home() {
    pinContainer.style.display = 'none';
    musicScreen.style.display = 'none';
    homeScreen.style.display = 'block';
    musicScreen.style.display = 'none';
    topItems();
}

music.addEventListener('click', function () {
    pinContainer.style.display = 'none';
    homeScreen.style.display = 'none';
    musicScreen.style.display = 'block';
    backBtn();
});

akph.addEventListener('click', function () {
   audio2.play();
});

function backBtn() {
    back.style.display = 'block';
}

back.addEventListener('click', home);