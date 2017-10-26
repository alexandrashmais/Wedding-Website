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


// ANGULAR JS CODE TO MAKE LIFE EASIER
var app = angular.module('App', []);
app.controller('mainCtrl', function ($scope) {

    $scope.hotels = [{
            name: "Four Seasons",
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/fourseasons.png?alt=media&token=d4610f93-87b0-4fb2-894e-1615001a7f71",
            url: "http://www.fourseasons.com/dallas/",
            title: "Four Seasons Las Colinas",
            description: "4150 N MacArthur Blvd \n Irving, TX 75038"
        },
        {
            name: "Omni",
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/omni.PNG?alt=media&token=9ec85b0e-223a-4691-9943-2c0134d0687e",
            url: "https://www.omnihotels.com/hotels/dallas-mandalay",
            title: "Omni Mandalay Las Colinas",
            description: "221 E Las Colinas Blvd \n Irving, TX 75039"
        },
        {
            name: "Holiday Inn",
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/holidayinn.png?alt=media&token=c660642b-a029-4c51-bc8b-bd2a980541a0",
            url: "https://www.holidayinn.com/hotels/us/en/irving/dfwiv/hoteldetail?qAdlt=1&qBrs=6c.hi.ex.rs.ic.cp.in.sb.cw.cv.ul.vn.ki.sp.nd.ct&qChld=0&qFRA=1&qGRM=0&qIta=99504425&qPSt=0&qRRSrt=rt&qRef=df&qRms=1&qRpn=1&qRpp=20&qSHp=1&qSmP=3&qSrt=sBR&qWch=0&srb_u=1&icdv=99504425&sicreative=169950953477&siclientid=9948&sitrackingid=948516400&dp=true&glat=SEAR",
            title: "Holiday Inn Las Colinas",
            description: "110 W John Carpenter Fwy \n Irving, TX 75038"
        }
    ];

    $scope.images = [
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F3.jpg?alt=media&token=966e0e80-bef0-47f1-914f-cf8c6546739b",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F3.jpg?alt=media&token=094192af-15cb-4413-a802-83eb35136387"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F5.jpg?alt=media&token=9aa2d3bd-3e33-4863-ba19-6fe4a00ca657",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F5.jpg?alt=media&token=5cd8e217-1812-4958-b882-a3149d8cc1fd"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F2.jpg?alt=media&token=3f3e3656-271d-40ba-ad1c-cba508f2bb24",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F2.jpg?alt=media&token=35b00683-b546-43b3-aebd-cb3a4be1a74e"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F9.jpg?alt=media&token=6600eea6-3f51-4cef-8014-d81d75cd51ab",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F9.jpg?alt=media&token=bf657f79-305f-4f1a-860b-efddc03eea6d"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F12.jpg?alt=media&token=6a647010-9b4a-4ec2-9273-404a506271b9",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F12.jpg?alt=media&token=c1c0a4d7-bd8d-40a8-8a67-576b1a049e32"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F1.jpg?alt=media&token=108205d7-f222-4fdd-9990-cafb84982382",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F1.jpg?alt=media&token=a229fe02-66e7-4dcd-8eac-c179267f4e5b"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F4.jpg?alt=media&token=4c9d6e5c-1ee1-457b-a43e-7da4050936b0",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F4.jpg?alt=media&token=22138c21-372f-43d3-b55b-df4297ae1ff7"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F7.jpg?alt=media&token=d2fadf51-474a-4221-aeda-3552e4fed24d",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F7.jpg?alt=media&token=bb74fca0-088c-4a88-9b9a-bb782073d88e"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F6.jpg?alt=media&token=3b946951-b1d6-4e0b-a74f-2bba8226df92",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F6.jpg?alt=media&token=87927f23-3a4f-4962-a489-a3c802134f00"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9{d.appspot.com/o/cropped%2F11.jpg?alt=media&token=591819fc-54b2-4bb0-a48f-2db10670ff43",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F11.jpg?alt=media&token=274179b3-e966-40df-a416-d990155d8c11"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F13.jpg?alt=media&token=0f609b2a-9751-463f-a324-52b4ddca90c2",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F13.jpg?alt=media&token=47095a88-799c-4ee2-83a0-496249bb6ddd"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/cropped%2F8.JPG?alt=media&token=40d454cb-b825-456c-a4d2-06ad483d9483",
            url: "https://firebasestorage.googleapis.com/v0/b/wedding-website-d3f9d.appspot.com/o/images%2F8.JPG?alt=media&token=99298f93-edfa-4694-97a8-87026a4a4bf2"
        }
    ];

    $scope.updateRSVPSelection = function (val) {
        if (val == "true") {
            $scope.rsvpComing = true;
            $scope.rsvpBtnMessage = "Accept With Plesure";
        } else {
            $scope.rsvpComing = false;
            $scope.rsvpBtnMessage = "Decline With Regret";
        }
        return $scope.rsvpComing;
    };
    $scope.rsvpComing = false;




    var text = `
    Designed with Love by:
    Ali and Zedd
    `;
    console.log(text);

});
