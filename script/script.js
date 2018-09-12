
 $(document).ready(function () {


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




     $("a[rel = 'colorbox']").colorbox({
         maxWidth:"100%",
         maxHeight:"100%",
         // opacity:"0.1",
     });

     $('.third .section__slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',

     });

     $('.seventh .section__slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',
         dots: true,

     });

     $('.eight .section__slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',
         dots: true,

     });

     //всплывающее меню          //
     var bloc = document.querySelector('.display_none');

     window.onscroll = function () {
         if(scrollY>=1031){
             bloc.style.display = "flex"
         }else {bloc.style.display = "none"}

     };


     var mapContainer = document.getElementById('map');

     showMap(document.getElementById('map'),  47.844830,  35.136227 );

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


 });

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


