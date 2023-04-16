let headerInfo = document.querySelector('.header__info');
let items = headerInfo.querySelectorAll('p');
let i = 0;
document.querySelectorAll('.likes').forEach(item => item.addEventListener('click', function(){changeInfo()}));
function changeInfo(){
    let allLikes = document.querySelectorAll('.likes > p');
    let allViews = document.querySelectorAll('.view > p');
    let countLikes = 0;
    let countViews = 0;
    allLikes.forEach(item => {countLikes = countLikes + +item.textContent});
    allViews.forEach(item => {countViews = countViews + +item.textContent})
    items[1].textContent = `Лайков: ${countLikes}`;
    items[2].textContent = `Просмотров: ${countViews}`;
}
changeInfo();