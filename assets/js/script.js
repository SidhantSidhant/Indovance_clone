$(document).ready(function ($) {
    let owl = $('#owlcarasole_11');

    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,


        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,

            },
            600: {
                items: 2,
                dots: true,
                nav: false,
            },
            960: {
                items: 3,
                // navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
            },
            1200: {
                items: 4,
                // navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
            }
        }
    });

    $('#owl-carousel_1').owlCarousel({
        loop: true,
        margin: 10,
        Infinity: true,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            600: {
                items: 1,
                dots: false,
            },
            1000: {
                items: 9,
                dots: true,
                nav: true,
                // navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],

            }
        }
    })

    $('#sid_carasole').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600 : {
                items : 2
            },
            900: {
                items: 2,
            },
            1000: {
                items: 3,
                // navText: ['<img src="../images/Vector.png">', ''],

            }
        }
    })

    $(".owl-prev").html(' <img src="../indovance/assets/images/Vector.jpg"  alt="">');
    $(".owl-next").html('<img src="../indovance/assets/images/Vector2.png"  alt="">');
});
