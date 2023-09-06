let siteLogoReffer = document.querySelector('.site_logo');

//Объявление переменной settings_button и поиск элемента с классом "settings"
let settings_button = document.querySelector('.settings');
let subscribe_button = document.querySelectorAll('.subscribe_button');

//Найти все кнопки лайков
let like_button = document.querySelectorAll('.likes > img');
//Назначить обработчик клика на каждую кнопку лайка
let alertNotReady = document.querySelectorAll('.not_ready');
like_button.forEach(item => item.addEventListener('click', like));
siteLogoReffer.addEventListener('click', function () { document.location.href = "/prostopost/index.html" });
// Добавление слушателя событий на элемент settings_button при наведении мыши
settings_button.addEventListener('mouseover', RotateSettingsButton);
subscribe_button.forEach(item => item.addEventListener('click', subscribeAction));

window.addEventListener("resize", screen);
// alert(window.innerWidth);
alertNotReady.forEach(item => item.addEventListener('click', function () { alert('Данная функция пока не доступна!') }))
let logoText = document.querySelector('.site_logo').innerHTML;
function screen() {
    if (window.innerWidth < 840) {
        document.querySelector('.site_logo').innerHTML = `<img src="/prostopost/content/mobile.svg">`;
        document.querySelectorAll('.edit').forEach(item => item.innerHTML = `<img src=/prostopost/content/edit.svg>`);
    } else {
        if (window.innerWidth > 840) {
            document.querySelector('.site_logo').innerHTML = logoText;
        }
    }
}
// like_button.forEach(item => likeRounder(item));
function likeRounder(item) {
    let likes = item.closest('.likes').querySelector('p');
    console.log(likes);
    if ((+likes.innerText > 1000) && (+likes.innerText < 10000)) {
        likes.innerText = "1к";
        console.log('a')
    } else {
        if ((+likes.innerText >= 10000) && (+likes.innerText < 100000)) {
            likes.innerText = `${+likes.innerText % 100}к`;
            console.log('add')
        }
    }
}
// Объявление функции RotateSettingsButton
function RotateSettingsButton() {
    // Инициализация переменной isOver со значением 1 и переменной rotate со значением 0
    let isOver = 1;
    let rotate = 0;
    // Вызов функции checkOver
    checkOver();
    // Добавление слушателя событий на элемент settings_button при уходе мыши
    settings_button.addEventListener('mouseout', function () { isOver = 0; });
    // Объявление функции checkOver
    function checkOver() {
        // Если курсор находится над элементом, то увеличивается значение переменной rotate на 10 и вызывается функция Rotate
        if (isOver == 1) {
            rotate += 10;
            Rotate();
        }
        // Если курсор ушел с элемента, то значение переменной rotate сбрасывается в 0 и устанавливается соответствующий стиль для элемента settings_button
        else {
            rotate = 0;
            settings_button.style.transform = `rotate(${rotate}deg)`;
        }
    }
    // Объявление функции Rotate, которая устанавливает соответствующий стиль для элемента settings_button и вызывает функцию checkOver через 50 миллисекунд
    function Rotate() {
        settings_button.style.transform = `rotate(${rotate}deg)`;
        setTimeout(checkOver, 100);
    }
}
//edited



//Функция обработчик клика на кнопку лайка
function like(ev) {
    //Получить текущее количество лайков
    let likeval = +ev.currentTarget.closest('.likes').querySelector('p').textContent;
    //Проверить, не была ли нажата кнопка лайка и не находится ли пост в режиме редактирования
    if ((ev.currentTarget.src == '/prostopost/content/like.svg') && !(ev.currentTarget.closest('.post').querySelector('.subscribe_button').classList.contains('edit'))) {
        // Если кнопка лайка не была нажата и пост не находится в режиме редактирования, то поменять картинку кнопки на лайкнутую и увеличить количество лайков на 1
        ev.currentTarget.src = '/prostopost/content/liked.svg';
        ev.currentTarget.closest('.likes').querySelector('p').textContent = +likeval + 1;
    } else {
        if (!(ev.currentTarget.closest('.post').querySelector('.subscribe_button').classList.contains('edit'))) {
            //Если кнопка лайка была нажата, то поменять картинку кнопки на нелайкнутую и уменьшить количество лайков на 1 
            ev.currentTarget.src = '/prostopost/content/like.svg';
            ev.currentTarget.closest('.likes').querySelector('p').textContent = +likeval - 1;
        }
    }
}
// Объявление функции subscribeAction с аргументом ev
function subscribeAction(ev) {
    //Если у элемента есть классы subscribe или subscribed
    if (ev.currentTarget.classList.contains('subscribe') || ev.currentTarget.classList.contains('subscribed')) {
        //Меняем класс subscribe у текущего элемента
        ev.currentTarget.classList.toggle('subscribe');
        //Меняем класс subscribed у текущего элемента
        ev.currentTarget.classList.toggle('subscribed');
    } else {
        // Если у элемента есть класс edit
        if (ev.currentTarget.classList.contains('edit')) {
            // Вызываем функцию editAction с аргументом ev
            editAction(ev);
        }
    }
}
function editAction(ev) {
    if (ev.currentTarget.closest('.post').querySelector('.post_body > p').contentEditable == 'true') {
        if (ev.currentTarget.closest('.post').querySelector('.post_body > p').textContent == "") {
            ev.currentTarget.closest('.post').classList.add('delete_post');
            document.querySelector('main').removeChild(document.querySelector('.delete_post'));
            changeInfo();
        } else {
            ev.currentTarget.closest('.post').querySelector('.post_body > p').contentEditable = 'false';
            ev.currentTarget.closest('.post').querySelector('.post_body').classList.remove('post_body__edit');
            changeInfo();
        }
    } else {
        ev.currentTarget.closest('.post').querySelector('.post_body > p').contentEditable = 'true';
        ev.currentTarget.closest('.post').querySelector('.post_body').classList.add('post_body__edit');
        ev.currentTarget.closest('.post').querySelector('.post_body > p').addEventListener('keydown', checkEmpty);
        function checkEmpty(ev) {
            if (ev.currentTarget.closest('.post').querySelector('.post_body > p').textContent == "") {
                document.querySelector('.edit').classList.add('edit_del');
            } else {
                document.querySelector('.edit').classList.remove('edit_del');
            }
        }
    }
}
function loader() {
    document.querySelector('body').style.display = 'flex';
}
loader();
screen();
