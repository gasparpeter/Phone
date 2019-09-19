let phoneContainer = document.getElementById('phone-container');
let screenContainer = document.getElementById('screen-container');
let pinContainer = document.getElementById('pin');
let utasitas = document.getElementById('text');
let input = document.getElementById('inputka');
let homeBtn = document.getElementById('home-btn');
let doneBtn = document.getElementById('done');
let homeScreen = document.getElementById("home-screen");
let powerBtn = document.getElementById('powerBtn');

var audio = new Audio('iPhonelock.mp3');

let passcode = "akph";

homeBtn.addEventListener('click', function () {
   pinContainer.style.display = 'block';
});

doneBtn.addEventListener('click', function () {
   if (input.value === passcode) {
       pinContainer.style.display = 'none';
       homeScreen.style.display = 'block';
   }else {
       input.style.border = '1px solid red'
   }
});

powerBtn.addEventListener('click', function () {
   pinContainer.style.display = 'none';
   homeScreen.style.display = 'none';
   input.value = null;
   audio.play();
});