// Add smooth scrolling to all links
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});


// ANGULAR JS CODE TO MAKE LIFE EASIER
var app = angular.module('App', []);
app.controller('mainCtrl', function($scope) {

    $scope.hotels = [{
            name: "Four Seasons",
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/fourseasons.png?alt=media&token=d4610f93-87b0-4fb2-894e-1615001a7f71",
            url: "http://www.fourseasons.com/dallas/",
            description: "Four Seasons Las Colinas \n 4150 N MacArthur Blvd \n Irving, TX 75038"
        },
        {
            name: "Omni",
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/omni.PNG?alt=media&token=9ec85b0e-223a-4691-9943-2c0134d0687e",
            url: "https://www.omnihotels.com/hotels/dallas-mandalay",
            description: "Omni Mandalay Las Colinas \n 221 E Las Colinas Blvd \n Irving, TX 75039"
        },
        {
            name: "Holiday Inn",
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/holidayinn.png?alt=media&token=c660642b-a029-4c51-bc8b-bd2a980541a0",
            url: "https://www.holidayinn.com/hotels/us/en/irving/dfwiv/hoteldetail?qAdlt=1&qBrs=6c.hi.ex.rs.ic.cp.in.sb.cw.cv.ul.vn.ki.sp.nd.ct&qChld=0&qFRA=1&qGRM=0&qIta=99504425&qPSt=0&qRRSrt=rt&qRef=df&qRms=1&qRpn=1&qRpp=20&qSHp=1&qSmP=3&qSrt=sBR&qWch=0&srb_u=1&icdv=99504425&sicreative=169950953477&siclientid=9948&sitrackingid=948516400&dp=true&glat=SEAR",
            description: "Holiday Inn Las Colinas \n 110 W John Carpenter Fwy \n Irving, TX 75038"
        }
    ];

    $scope.images = [
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F1.jpg?alt=media&token=a229fe02-66e7-4dcd-8eac-c179267f4e5b",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F2.jpg?alt=media&token=35b00683-b546-43b3-aebd-cb3a4be1a74e",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F3.jpg?alt=media&token=094192af-15cb-4413-a802-83eb35136387",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F5.jpg?alt=media&token=5cd8e217-1812-4958-b882-a3149d8cc1fd",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F12.jpg?alt=media&token=c1c0a4d7-bd8d-40a8-8a67-576b1a049e32",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F9.jpg?alt=media&token=bf657f79-305f-4f1a-860b-efddc03eea6d",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F4.jpg?alt=media&token=22138c21-372f-43d3-b55b-df4297ae1ff7",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F7.jpg?alt=media&token=bb74fca0-088c-4a88-9b9a-bb782073d88e",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F6.jpg?alt=media&token=87927f23-3a4f-4962-a489-a3c802134f00",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F11.jpg?alt=media&token=274179b3-e966-40df-a416-d990155d8c11",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F13.jpg?alt=media&token=47095a88-799c-4ee2-83a0-496249bb6ddd",
        "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F8.JPG?alt=media&token=99298f93-edfa-4694-97a8-87026a4a4bf2"
    ];

});