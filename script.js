let phoneContainer = document.getElementById('phone-container');
let screenContainer = document.getElementById('screen-container');
let pinContainer = document.getElementById('pin');
let utasitas = document.getElementById('text');
let input = document.getElementById('inputka');
let homeBtn = document.getElementById('home-btn');
let doneBtn = document.getElementById('done');

let passcode = "akph";

homeBtn.addEventListener('click', function () {
   pinContainer.style.display = 'block';
});

doneBtn.addEventListener('click', function () {
   if (input.value === passcode) {
       alert('jo')
   }else {
       alert('nem jo')
   }
});