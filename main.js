/*============================== toggle icon navbar ===========================*/

let newIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

    


/*============================== scroll section active ===========================*/

let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id + ']' ).classList.add('active');
            });
        };
    });

     /*============================== sticky navbar ===========================*/
     let header = document.querySelector('.header');
     header.classList.toggle('sticky', window.scrollY > 100);
 
     /*============================== remove toggle icon and navbar ===========================*/
     menuIcon.classList.remove('fa-xmark');
     navbar.classList.remove('active');
};

/*============================== scroll reveal ===========================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home img, .education-container, .skills-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('home-contact h1, .about-img',  { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content, .photo-container, .hobbies-container', { origin: 'right' });

/*============================== type js ===========================*/

const typed = new Typed('.multiple-text', {
    strings: ['IT', 'GAMER'],
    typeSpeed: 70,
    backspeed: 70,
    backDelay: 1000,
    loop: true,
});

window.addEventListener('click', () => {
    document.getElementById("song").play();
});