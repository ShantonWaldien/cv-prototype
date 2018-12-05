
/***** Navbar scroll color change *******/

window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('nav');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-colored');
            nav.classList.add('nav-height');
            nav.classList.add('nav-text');
        } else {
            nav.classList.remove('nav-colored');
            nav.classList.remove('nav-height');
            nav.classList.remove('nav-text');
        }
});

/********** Typewriter Effect **********/
