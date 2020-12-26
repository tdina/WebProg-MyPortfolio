const imgs = [
    'Images/cat1.jpg',
    'Images/cat2.jpg',
    'Images/cat4.jpg',
    'Images/cat5.jpg',
    'Images/cat6.jpg',
];

const main_window = document.querySelector('.big-window img');
const slider_imgs = document.querySelectorAll('.slider a img');
const slider_a = document.querySelectorAll('.slider a');
let slider_indexes = [0, 1, 2];
let main_window_img_index = 1;

function init_lower_imgs() {
    slider_imgs.forEach((elem, i) => elem.src = imgs[i])
    refresh_main_window();

    for (let i = 0; i < slider_a.length; ++i) {
        let elem = slider_a[i];
        elem.addEventListener('click', () => move_next(elem));
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete')
        init_lower_imgs();
}

function move_next(elem) {
    let img_index = slider_indexes[elem.firstChild.id - 1];
    let left = img_index === 0 ? imgs.length - 1 : img_index - 1;
    let right = img_index === imgs.length - 1 ? 0 : img_index + 1;
    slider_indexes = [left, img_index, right];

    refresh_slider_imgs();
}

function refresh_main_window() {
    main_window.src = imgs[main_window_img_index];
}

function refresh_slider_imgs() {
    slider_a.forEach((elem, idx) =>
        elem.firstChild.src = imgs[slider_indexes[idx]]);

    main_window_img_index = slider_indexes[1];
    refresh_main_window();
}

const modal = document.querySelector('.modal');
const modal_title = document.querySelector('.modal-title');
let modal_overlay = document.querySelector('.overlay-modal');
const show_up_menu = document.querySelector('.show-up-menu');

show_up_menu.addEventListener('click', show_contacts);

function show_contacts(evt) {
    evt.preventDefault();
    modal.classList.add('active');
    modal_overlay.classList.add('active');
    modal_overlay.addEventListener('click', func);
    modal.addEventListener('click', func);
}

func = function () {
    modal.classList.remove('active');
    modal_overlay.classList.remove('active');
    modal_overlay.removeEventListener('click', func, false);
    modal.removeEventListener('click', func, false);
}