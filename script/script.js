
 $(document).ready(function () {

        //                функция скрола


     $(document).on("scroll", onScroll);

     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();
         $(document).off("scroll");

         $('a').each(function () {
             $(this).removeClass('active');
         });
         $(this).addClass('active');

         var target = this.hash;
         $target = $(target);
         $('html, body').stop().animate({
             'scrollTop': $target.offset().top
         }, 1000, 'swing', function () {
             window.location.hash = target;
             $(document).on("scroll", onScroll);
         });
     });

     //===================================//


     //                галерея


     $("a[rel = 'colorbox']").colorbox({
         maxWidth:"100%",
         maxHeight:"100%",

     });

     //=================================//


     //              слайдер

     $('.third-section-hidden').slick({
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',



     });

     $('.third-section-visible').slick({
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',
         dots: true,
         responsive: [

             {
                 breakpoint: 805,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     arrows:false,


                 }
             },
         ]


     });

     $('.fourth-section-visible').slick({
         infinite: false,
         slidesToShow: 2,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',
         dots: true,
         responsive: [
             {
                 breakpoint: 901,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,


                 }
             },
             {
                 breakpoint: 500,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     arrows:false,


                 }
             },
             ]

     });


     $('.seventh .section__slider').slick({
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',
         dots: true,
         responsive: [

             {
                 breakpoint: 805,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     arrows:false,


                 }
             },
         ]


     });

     $('.eight .section__slider').slick({
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',
         dots: true,
         responsive: [

             {
                 breakpoint: 805,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     arrows:false,


                 }
             },
         ]


     });


     //======================================//

        //          всплывающее меню


     var bloc = document.querySelector('.header_scroll');

     window.onscroll = function () {
         if(scrollY>=1031&&innerWidth>=1199){
             bloc.style.display = "flex"
         }else {bloc.style.display = "none"}

     };


           //================================//





     //                   карта

     var mapContainer = document.getElementById('map');

     showMap(document.getElementById('map'),  47.846449,   35.139038 );

     function showMap(mapContaine, lat, lon) {
         var center = new google.maps.LatLng(lat, lon);

         var marker = new google.maps.Marker({
             position: {lat:  47.846449, lng: 35.139038},
             icon: {
                 url: "script/placeholder.png",
                 scaledSize: new google.maps.Size(47, 66)
             }
         });

         var mapProp= {
             center: center,
             zoom: 17,
             zoomControl:false,
             disableDefaultUI: true,
             //
         };

         var map = new google.maps.Map(mapContainer, mapProp);
         marker.setMap(map);

     }

           //====================================//


            //           бургер меню

         $(function() {
             $('.menu__icon').on('click', function() {
                 $(this).closest('.nav__menu')
                     .toggleClass('menu_state_open');
             });

             $('.menu__links-item').on('click', function() {


                 $(this).closest('.nav__menu')
                     .removeClass('menu_state_open');
             });
         });

               //======================//


     $(".set > p").on("click", function() {
         if ($(this).hasClass("active")) {
             $(this).removeClass("active");
             $(this)
                 .siblings(".content")
                 .slideUp(200);
             $(".set > p i")
                 .removeClass("fa-times")
                 .addClass("fa-angle-down");
         } else {
             $(".set > p i")
                 .removeClass("fa-times")
                 .addClass("fa-angle-down");
             $(this)
                 .find("i")
                 .removeClass("fa-angle-down")
                 .addClass("fa-times");
             $(".set > p").removeClass("active");
             $(this).addClass("active");
             $(".content").slideUp(200);
             $(this)
                 .siblings(".content")
                 .slideDown(200);
         }
     });

     var elements = $('.modal-overlay, .modal');

     $('button').click(function(){
         elements.addClass('active1');
     });

     $('.close-modal').click(function(){
         elements.removeClass('active1');
     });


 });




        //            функция скрола

 function onScroll(){
     var scrollPosition = $(document).scrollTop();
     $('.nav__menu a').each(function () {
         var currentLink = $(this);
         var refElement = $(currentLink.attr("href"));
         if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
             $('.nav__menu ul li a').removeClass("active");
             currentLink.addClass("active");
         }
         else{
             currentLink.removeClass("active");
         }
     });
 }

            //===============================//

