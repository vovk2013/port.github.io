


function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
};


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault ();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
    })
}