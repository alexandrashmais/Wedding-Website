$(document).ready(function() {
    $("[data-fancybox]").fancybox({
        transitionEffect : "zoom-in-out",
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