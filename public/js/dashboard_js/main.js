let toogle = document.querySelector('.toogle');
let side__bar = document.querySelector('.side__bar');
let nav__bar = document.querySelector('.nav__bar');
let main = document.querySelector('.main');
toogle.addEventListener('click', () =>{
    side__bar.classList.toggle('active');
    nav__bar.classList.toggle('active');
    main.classList.toggle('active');
});