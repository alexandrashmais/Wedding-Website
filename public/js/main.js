(function ($) {


    $(document).ready(function () {
        lightBox();
    });


    $(window).resize(function () {
        respond();
    });

    $(document).load(function () {

    });


    function lightBox() {
        lightbox.option({
            alwaysShowNavOnTouchDevices true,
            positionFromTop 100,
            showImageNumberLabel false
        });
    }



}(jQuery));
