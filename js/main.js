
/***** Navbar scroll color change *******/

window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('nav');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-colored');
            nav.classList.add('nav-text');
        } else {
            nav.classList.remove('nav-colored');
            nav.classList.remove('nav-text');
        }
});

/**** Back to top button function *****/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

