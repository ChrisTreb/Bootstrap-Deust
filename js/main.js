// JQuery function

$( document ).ready(function() {
    // Smooth Scroll to ID
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});
