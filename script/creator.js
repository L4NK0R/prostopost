let postadd = document.querySelector('.send_button');
document.querySelector('.typing').textContent = "";
document.querySelector('.typing').contentEditable = 'true';
postadd.addEventListener('click', post);
function post() {
    if (document.querySelector('.typing').textContent == "") {
    } else {
        document.querySelector('.post:nth-child(1)').insertAdjacentHTML('afterend', `
        <div class="post">
        <div class="post_head">
            <a href="#" class="author_logo_name">
                <img src="" alt="">
                <p>Creator</p>
            </a>
            <div class="subscribe_button edit"></div>
        </div>
        <div class="post_body">
            <p>${document.querySelector('.typing').textContent}</p>
        </div>
        <div class="post_footer">
            <div class="likes">
                <img src="/prostopost/content/like.svg" alt="">
            <p>0</p>
            </div>
            <div class="view">
                <img src="/prostopost/content/viewed.svg" alt="">
                <p>0</p>
            </div>
        </div>
    </div>`);
        document.querySelector('.typing').textContent = "";
        subscribe_button = document.querySelectorAll('.subscribe_button');
        screen();
        subscribe_button.forEach(item => item.addEventListener('click', subscribeAction));
    }
}
