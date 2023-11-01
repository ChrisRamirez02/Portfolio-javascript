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

function displayDateTime() {
    const clock = document.getElementById('digital-clock');
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const day = currentDate.getDate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    clock.innerHTML = `
        <span class="clock" style="font-size: 2.5rem;">${formattedHours}:${formattedMinutes}:${formattedSeconds}</span>
        <span class="date" style="font-size: 1.5rem;">${month} ${day}, ${year}</span>
    `;
}

setInterval(displayDateTime, 1000);

displayDateTime();
