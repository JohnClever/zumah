$(document).ready(function() {
    /* ... */
    var windowHeight = $(window).innerHeight();
    $('body').css({'height':windowHeight});
    /* ... */
});






var signUp = document.querySelector(".sign_up");
function toggle() {
    signUp.classList.toggle("active")
    // console.log('hello');
    
}

window.addEventListener('scroll', function () {
    var navbar = document.querySelector(".navbar")
    navbar.classList.toggle("active", scrollY > 0);
   
    
})
