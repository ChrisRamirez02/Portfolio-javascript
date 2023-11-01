let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');

            });
        };    
    });  
    let header = document.querySelector('header');


    header.classList.toggle('sticky' , window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
    
// Add event listeners to open social media links in new tabs
document.getElementById('facebookIcon').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://www.facebook.com', '_blank');
});

document.getElementById('twitterIcon').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://twitter.com', '_blank');
});

document.getElementById('instagramIcon').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://www.instagram.com', '_blank');
});

document.getElementById('telegramIcon').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://telegram.org', '_blank');
});