// JavaScript Document

$(document).ready(function() {


    var nav = document.getElementById('nav');
    window.onscroll = function() {
        if (window.pageYOffset > 9 && screen.width >= 992) {
            nav.style.zIndex = 999999999999999;

        }
    };

    new WOW().init();

    let categories = ['FlashDisk', 'Cables', 'PowerBanks', 'ScreenProtector', 'Others']

    $('nav ul li').click(function() {
        $('nav ul li.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.dropdown-item').click(function() {
        $(this).parents('.dropdown').children('.btn').html($(this).html());
    });


    $('.menu-btn').click(function() {
        $('.side-menu').toggleClass('on');
    });

    $('.close-menu').click(function() {
        $('.side-menu').removeClass('on');
    });


    $('.filter').click(function() {
        var type = $(this).attr('data-filter');
        $('.filter.active').removeClass('active');
        $(this).addClass('active');
        categories.forEach(category => {
            if (type === 'all') {
                $('.all-products .gal').show();
            } else if (type == category) {
                $('.all-products .gal').hide();
                $(`.all-products .${category}`).show();
            }
        })

    });



    $('.gal').click(function() {
        window.location.href = "product-details.html";

    });

});
//Get the button:
mybutton = document.getElementById("toTop");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}