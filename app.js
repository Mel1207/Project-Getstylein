// Navbar Setup
$(document).ready(() => {
    $(window).scroll(() => {
        $(window).scroll(() => {
            if($(this).scrollTop() > 0) {
                $(".navbar").css({"opacity" : "1"})
            }
            else { 
                $(".navbar").css({"opacity" : "0"})
            }
        });
    });
});

// Parallax Behavior
const rellax = new Rellax('.rellax');
const cenllax = new Rellax('.cenllax', {
    center: true
});