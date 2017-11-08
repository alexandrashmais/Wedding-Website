$(document).ready(function() {
    $("[data-fancybox]").fancybox({
        transitionEffect : "fade",
        loop : true,
        toolbar : true,
        buttons : [
            'close'
        ],
        thumbs: {
            autoStart   : false,
            hideOnClose : true
        }
    });
});

// Add smooth scrolling to all links
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});