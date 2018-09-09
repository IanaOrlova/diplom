
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

     function onScroll(){
         var scrollPosition = $(document).scrollTop();
         $('nav a').each(function () {
             var currentLink = $(this);
             var refElement = $(currentLink.attr("href"));
             if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                 $('nav ul li a').removeClass("active");
                 currentLink.addClass("active");
             }
             else{
                 currentLink.removeClass("active");
             }
         });
     }


     // $("a[rel = 'colorbox']").colorbox({
     //     maxWidth:"100%",
     //     maxHeight:"100%",
     //     opacity:"0.1",
     // });

     $('.third-section__slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',

     });

     $('.seventh-section__slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         prevArrow:'<img class="prev" src="img/left.png">',
         nextArrow:'<img class="next" src="img/right.png">',
         dots: true,

     });
     // var bloc = document.querySelector('.green');
     //
     // window.onscroll = function () {
     //     if(scrollY>=1600){
     //         bloc.style.color = "white"
     //     }else {bloc.style.color = "black"}
     //
     // }


 });




