const navBar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const bars = document.querySelector('.fa-bars');


document.addEventListener('scroll', () => {

    if(window.scrollY > 0){
        navBar.classList.add('navbar-styling');
    }else{
        navBar.classList.remove('navbar-styling');
    }
})

// show menu on small device 
burger.addEventListener('click', () => {
    menu.classList.toggle('translate-x-0');
    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');
})

var typed = new Typed('#typing', {
      strings: ['Developer','Freelancer', 'Designer', 'Photographer','Coder'],
      typeSpeed: 30,
      loop:true,
      backDelay:3000,
      showCursor:false,
    });