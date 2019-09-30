
// Containers
let phoneContainer = document.getElementById('phone-container');
let screenContainer = document.getElementById('screen-container');
let pinContainer = document.getElementById('pin');


// buttons
let homeBtn = document.getElementById('home-btn');
let doneBtn = document.getElementById('done');
let powerBtn = document.getElementById('powerBtn');
let back = document.getElementById('music-back');
let albumBtn = document.getElementById('album');

let utasitas = document.getElementById('text');
let input = document.getElementById('inputka');
let akph = document.getElementById('akph');


let galery = document.getElementById('galery');
let screenshots = document.getElementById('screenshots');
let defaultPictures = document.getElementById('default-pictures');

// screen
let homeScreen = document.getElementById("home-screen");
let musicScreen = document.getElementById('music-screen');
let albumScreen = document.getElementById('album-screen');
let messageScreen = document.getElementById('message-screen');

// top apps
let telephone = document.getElementById('telephone');
let safari = document.getElementById('safari');
let music = document.getElementById('music');
let messages = document.getElementById('messages');


// SMS
let list = document.getElementById('list');
let container = document.getElementById('container');

let name = document.getElementById('input');
let message = document.getElementById('textarea');
let sendBtn = document.getElementById('send');
let header = document.getElementById('header');

let SMS = [];

let editmode = false;
let editIndex = null;





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

powerBtn.addEventListener('click', power);

function power() {
    pinContainer.style.display = 'none';
    homeScreen.style.display = 'none';
    input.value = null;
    musicScreen.style.display = 'none';
    musicScreen.style.display = 'none';
    albumScreen.style.display = 'none';
    messageScreen.style.display = 'none';
    audio.play();
    audio2.pause();
}

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
    albumScreen.style.display = 'none';
    screenshots.style.display = 'none';
    galery.style.display = 'none';
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

albumBtn.addEventListener('click', function () {
    pinContainer.style.display = 'none';
    homeScreen.style.display = 'none';
    musicScreen.style.display = 'none';
    albumScreen.style.display = 'block';
    screenshots.style.display = 'inline-block';
    galery.style.display = 'inline-block';
    backBtn();
});

galery.addEventListener('click', function () {
    screenshots.style.display = 'none';
    galery.style.display = 'none';
   defaultPictures.style.display = 'block'
});

messages.addEventListener('click', function () {
    screenshots.style.display = 'none';
    galery.style.display = 'none';
    defaultPictures.style.display = 'none';
    telephone.style.display = 'none';
    safari.style.display = 'none';
    music.style.display = 'none';
    messages.style.display = 'none';
    messageScreen.style.display = 'block';
});

header.addEventListener('click', function () {
   container.style.display = 'none';
   list.style.display = 'block';
});

sendBtn.addEventListener('click', function () {

    if ( editmode && editIndex !== null ) {

        list.children[ editIndex ].innerText = name.value;

        SMS[ editIndex ].name = name.value;
        SMS[ editIndex ].message = message.value;

    }else {
        if (name.value.length <= 0 || message.value.length <= 0) {
            alert('ERROR')
        }else {
            const names = document.createElement('li');
            names.innerText = name.value;
            list.appendChild(names);


            SMS.push({
                "name": name.value,
                "message": message.value
            });

            names.addEventListener('click',  function (e) {
                list.style.display = 'none';
                container.style.display = 'block';
                const index = getChildIndex( e.target );

                const sms = SMS[ index ];

                name.value = sms.name;
                message.value = sms.message;

                editmode = true;
                editIndex = index;
            });

            resetInputs()
        }

    }



});

var getChildIndex = function(child){
    var parent = child.parentNode;
    var children = parent.children;
    var i = children.length - 1;
    for (; i >= 0; i--){
        if (child == children[i]){
            break;
        }
    }
    return i;
};

function resetInputs() {
    name.value = null;
    message.value = null;
}
