let siteLogoReffer = document.querySelector('.site_logo');
let settings_button = document.querySelector('.settings');
let subscribe_button = document.querySelectorAll('.subscribe_button');
let like_button = document.querySelectorAll('.likes > img');
like_button.forEach(item => item.addEventListener('click', like));
siteLogoReffer.addEventListener('click', function () { document.location.href = "/prostopost/index.html" });
settings_button.addEventListener('mouseover', RotateSettingsButton);
subscribe_button.forEach(item => item.addEventListener('click', subscribeAction));

window.addEventListener("resize", screen);

function screen(){
    if (window.innerWidth < 840) {
        document.querySelector('.site_logo').innerHTML = `<img src="/prostopost/content/mobile.svg">`;
    }
}
// like_button.forEach(item => likeRounder(item));
function likeRounder(item){
    let likes = item.closest('.likes').querySelector('p');
    console.log(likes);
    if((+likes.innerText > 1000)&&(+likes.innerText < 10000)){
        likes.innerText = "1к";
        console.log('a')
    }else{
        if((+likes.innerText >= 10000)&&(+likes.innerText < 100000)){
            likes.innerText = `${+likes.innerText % 100}к`;
            console.log('add')
        }
    }
}
function RotateSettingsButton() {
    let isOver = 1;
    let rotate = 0;
    checkOver();
    settings_button.addEventListener('mouseout', function () { isOver = 0; });
    function checkOver() {
        if (isOver == 1) {
            rotate += 10;
            Rotate();
        } else {
            rotate = 0;
            settings_button.style.transform = `rotate(${rotate}deg)`;
        }
    }
    function Rotate() {
        settings_button.style.transform = `rotate(${rotate}deg)`;
        setTimeout(checkOver, 50);
    }
}
//edited
function like(ev) {
    let likeval = +ev.currentTarget.closest('.likes').querySelector('p').textContent;
    if ((ev.currentTarget.src == '/prostopost/content/like.svg') && !(ev.currentTarget.closest('.post').querySelector('.subscribe_button').classList.contains('edit'))) {
        ev.currentTarget.src = '/prostopost/content/liked.svg';
        ev.currentTarget.closest('.likes').querySelector('p').textContent = +likeval + 1;
    } else {
        ev.currentTarget.src = '/prostopost/content/like.svg';
        ev.currentTarget.closest('.likes').querySelector('p').textContent = +likeval - 1;
    }
}
function subscribeAction(ev) {
    if (ev.currentTarget.classList.contains('subscribe') || ev.currentTarget.classList.contains('subscribed')) {
        ev.currentTarget.classList.toggle('subscribe');
        ev.currentTarget.classList.toggle('subscribed');
    }else{
        if(ev.currentTarget.classList.contains('edit')){
            editAction(ev);
        }
    }
}
function editAction(ev){
    if(ev.currentTarget.closest('.post').querySelector('.post_body > p').contentEditable == 'true'){
        ev.currentTarget.closest('.post').querySelector('.post_body > p').contentEditable = 'false';
    }else{
        ev.currentTarget.closest('.post').querySelector('.post_body > p').contentEditable = 'true';
    }
    // console.log(postText);
}


