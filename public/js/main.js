$(document).ready(function() {
    $(".fancybox-thumb").fancybox({
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            overlay : {
                locked : false
            },
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });
});