const btn_menu = document.getElementById('menu');
const menu = document.querySelector('.second-column');
const btn_close = document.getElementById("exit");


btn_menu.addEventListener("click", () => {
    menu.classList.add('js-open');
})

btn_close.addEventListener("click", () => {
    menu.classList.remove('js-open')
    menu.classList.add('js-close')
})