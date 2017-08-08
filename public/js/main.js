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