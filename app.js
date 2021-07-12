//loader section strats
const loaderWrapper = document.querySelector('.loader-wrapper');
window.addEventListener('load', () => {
    loaderWrapper.classList.add('disappear');
  });
//   loader section ends


// pageLoader()
// initSlider()



const container = document.querySelector('.container');
const left = container.children[0];
const right = container.children[1];

const appImg = right.children[0];
const findImg = right.children[1];

const spotlightImg = right.children[2];

const keyboardImg = right.children[3];

const notificationsImg = right.children[4];

const safariImg = right.children[5];

const messagesImg = right.children[6];
const chatBox = messagesImg.children[1];


const photosImg = right.children[7];
const photoBox = photosImg.children[1];

const mailImg = right.children[8];

const entertainmentImg = right.children[9];
const appleImg = right.children[10];
const continuityImg = right.children[11];
// const spotlightDiv = spotlightImg.children[2];


console.log(mailImg.children[2]);

let interval;
//decalaring some functions


//finder function
//app function

function app() {
    if(int === 0) {
        left.children[0].style.opacity = 1;
        left.children[0].classList.add('left-item');
        appImg.classList.add("right-item");
        appImg.style.opacity = 1;
        appImg.children[2].classList.add('calendar-icon-repeat');
        appImg.children[4].classList.add('calendar-repeat');
        
    } else {
        left.children[0].classList.remove('left-item');
        appImg.classList.remove("right-item");
        appImg.style.opacity = 0;
        left.children[0].style.opacity = 0;
        appImg.children[2].classList.remove('calendar-icon-repeat');
        appImg.children[4].classList.remove('calendar-repeat');
    }
}



//finder function
function finder() {
    if(int === 1) {
        left.children[1].classList.add('left-item');
        findImg.classList.add('right-item');
        findImg.children[1].classList.add("finder-top-animation");
        findImg.children[2].classList.add('find-hidden-img-animation');
    } else {
        left.children[1].classList.remove('left-item');
        findImg.classList.remove('right-item');
        findImg.children[1].classList.remove('finder-top-animation');
        findImg.children[2].classList.remove('find-hidden-img-animation');
    }
}



//spotlight function
function spotlight() {
    if(int === 2) { 
        left.children[2].classList.add('left-item');
        spotlightImg.classList.add("right-item");
        spotlightImg.children[1].classList.add('search-placeholder-animation');
        spotlightImg.children[2].classList.add("search-div-animation");
        spotlightImg.children[3].classList.add("search-first-animation");
        spotlightImg.children[4].classList.add("cursor-animation");
        spotlightImg.children[5].classList.add('search-second-animation'); 
        spotlightImg.children[6].classList.add("search-third-animation");
    } else {
        spotlightImg.children[4].classList.remove('cursor-animation');
        left.children[2].classList.remove('left-item');
        spotlightImg.classList.remove("right-item");
        spotlightImg.children[1].classList.remove('search-placeholder-animation');
        spotlightImg.children[2].classList.remove("search-div-animation");
        spotlightImg.children[3].classList.remove("search-first-animation");
        spotlightImg.children[5].classList.remove('search-second-animation');
        spotlightImg.children[6].classList.remove("search-third-animation"); 
    }
}


//keyboard function

function keyboard() {
    if(int === 3) {
        left.children[3].classList.add('left-item');
        keyboardImg.classList.add('right-item');
        keyboardImg.children[1].classList.add("overlay-animation");
    } else {
        left.children[3].classList.remove('left-item');
        keyboardImg.classList.remove("right-item");
        keyboardImg.children[1].classList.remove('overlay-animation');
    }
}

//notifications function
function notifications() {
    if(int === 4) {
        left.children[4].classList.add('left-item');
        notificationsImg.classList.add('right-item');
        notificationsImg.children[2].classList.add("notifications-msg");
        notificationsImg.children[3].classList.add('notifications-calendar-animation');
        notificationsImg.children[4].classList.add('inside-msg-animation');
        notificationsImg.children[5].classList.add("msg-animation");
    } else {
        left.children[4].classList.remove('left-item');
        notificationsImg.classList.remove("right-item");
        notificationsImg.children[2].classList.remove("notifications-msg");
        notificationsImg.children[3].classList.remove('notifications-calendar-animation');
        notificationsImg.children[4].classList.remove('inside-msg-animation');
        notificationsImg.children[5].classList.remove("msg-animation");
    }
}

//safari function
function safari() {
    if(int === 5) {
        left.children[5].classList.add("left-item");
        safariImg.classList.add("right-item");
        safariImg.children[1].classList.add("blank-animation");
        safariImg.children[2].classList.add('search-animation');
        safariImg.children[3].classList.add("weather-animation");
    } else {
        left.children[5].classList.remove("left-item");
        safariImg.classList.remove('right-item');
        safariImg.children[1].classList.remove('blank-animation');
        safariImg.children[2].classList.remove("search-animation");
        safariImg.children[3].classList.remove('weather-animation');
    }
}

//messages function 
function messages() {
    if(int === 6) {
        left.children[6].classList.add('left-item');
        messagesImg.classList.add('right-item');
        chatBox.children[0].classList.add('chatInner-animation');
        messagesImg.children[2].classList.add("wonderful-animation");
        messagesImg.children[3].classList.add("wonderful-msg-animation");
    } else {
        left.children[6].classList.remove("left-item");
        messagesImg.classList.remove('right-item');
        chatBox.children[0].classList.remove('chatInner-animation');
        messagesImg.children[2].classList.remove('wonderful-animation');
        messagesImg.children[3].classList.remove('wonderful-msg-animation');
    }
}

//photos function
function photos() {
    if(int === 7) {
        left.children[7].classList.add('left-item');
        photosImg.classList.add("right-item");
        photoBox.children[0].classList.add("innerAll-img-animation");
        photosImg.children[2].classList.add('first-header-animation');
        photosImg.children[3].classList.add("date-animation");
        photosImg.children[6].classList.add("img-select-animation");
    } else {
        left.children[7].classList.remove('left-item');
        photosImg.classList.remove("right-item");
        photoBox.children[0].classList.remove("innerAll-img-animation");
        photosImg.children[2].classList.remove('first-header-animation');
        photosImg.children[3].classList.remove('date-animation');
        photosImg.children[6].classList.remove("img-select-animation");
    }
}

//mails function
function mail() {
    if(int === 8) {
        left.children[8].classList.add('left-item');
        mailImg.classList.add('right-item'); 

        mailImg.children[1].classList.add("fixed-box-animation");
        mailImg.children[2].classList.add('chevron-animation');
        mailImg.children[3].classList.add("first-box-animation");
        mailImg.children[4].classList.add('personal-mail-animation');
    } else {
        left.children[8].classList.remove('left-item');
        mailImg.classList.remove('right-item');

        mailImg.children[1].classList.remove('fixed-box-animation');
        mailImg.children[2].classList.remove("chevron-animation");
        mailImg.children[3].classList.remove('first-box-animation');
        mailImg.children[4].classList.remove('personal-mail-animation');
    }
}

//entertainment function
function entertainment() {
    if(int === 9) {
        left.children[9].classList.add('left-item');
        entertainmentImg.classList.add("right-item");
        entertainmentImg.children[2].classList.add("tv-animation");
        entertainmentImg.children[3].classList.add('browser-animation');
        entertainmentImg.children[4].classList.add('music-animation');
    } else {
        left.children[9].classList.remove('left-item');
        entertainmentImg.classList.remove("right-item");
        entertainmentImg.children[2].classList.remove("tv-animation");
        entertainmentImg.children[3].classList.remove("browser-animation");
        entertainmentImg.children[4].classList.remove('music-animation');
    }
}

// apple function
function apple() {
    if(int === 10) {
        left.children[10].classList.add("left-item");
        appleImg.classList.add('right-item');
        appleImg.children[1].classList.add("apple-select-animation");
        appleImg.children[2].classList.add('hidden-apple-animation');
    } else {
        left.children[10].classList.remove('left-item');
        appleImg.classList.remove("right-item");
        appleImg.children[1].classList.remove("apple-select-animation");
        appleImg.children[2].classList.remove('hidden-apple-animation');
    }
}

// continuity function
function continuity() {
    if(int === 11) {
        left.children[11].classList.add('left-item');
        continuityImg.classList.add("right-item");
        continuityImg.children[4].classList.add("box-animation");
    } else {
        left.children[11].classList.remove('left-item');
        continuityImg.classList.remove("right-item");
        continuityImg.children[4].classList.remove('box-animation');
    }
}


function white() {
    if(int === 12) {
        right.style.background = 'white';
        document.querySelector('.slide-int').style.display = 'none';
        document.getElementById("next").style.display = 'none';
        document.getElementById("prev").style.transform = 'translateX(-200px)';
    } else {
        right.style.background = '#fafafa';
        document.querySelector('.slide-int').style.display = 'block';
        document.getElementById('next').style.display = 'block';
        document.getElementById("prev").style.transform = 'translateX(0px)';
    }
}
// done!!


let int = 0;
let num = 1;
const nxtBtn = document.getElementById('next');
const prvBtn = document.getElementById('prev');

if(int === 0) { 
    left.children[0].style.opacity = 1;
    appImg.style.opacity = 1;

} else {
    left.children[0].style.opacity = 0;
    appImg.style.opacity = 0;
}






//
function allInOne() {
    app();
    finder();
    spotlight();
    keyboard();
    notifications();
    safari();
    messages();
    photos();
    mail();
    entertainment();
    apple();
    continuity();
    white();
}





function aa() { 
    
  
 if(int < 12) {
    int++; 
    num++;
    document.getElementById('current').innerHTML = num;
    allInOne();
}
}


// setInterval(aa, 4000);

nxtBtn.addEventListener('click', aa);




prvBtn.addEventListener('click', () => {  
    if(int > -1) { 
        int--;
        num--;
        document.getElementById('current').innerHTML = num;

        allInOne();

        if(int < 0) {
            window.location.reload();
        }
}
});


document.body.addEventListener('keydown', key);

function key(event) {
    if(event.keyCode === 37) {
        if(int > -1) { 
            int--;
            num--;
            document.getElementById('current').innerHTML = num;
            
            allInOne();
        }

        if(int < 0) {
            window.location.reload();
        }
    }

    if(event.keyCode === 39) {
        if(int < 12) {
            int++; 
            num++;
            document.getElementById('current').innerHTML = num;
            allInOne();
        }
    }
}

// key();