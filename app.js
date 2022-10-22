window.addEventListener('load', () => {
    const hamMenu = document.querySelector('.hamburger-menu');
    
    hamMenu.addEventListener('click', () => {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    });
});
