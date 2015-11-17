$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: target.offset().top - 48
            }, 1000);
        }
    });
});

function showDiv(id) {
    $('#main').fadeOut();
    $(id).fadeIn();
    window.scrollTo(0, 0);
}

function hideDiv(id) {
    $(id).fadeOut();
    $('#main').fadeIn();
}

function hideProject(id) {
    $(id).fadeOut();
    $('#main').fadeIn();
    window.location.href = '#work';
}