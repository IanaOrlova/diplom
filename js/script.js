
 $(document).ready(function () {

     $('.logo').fadeIn(5000);

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
         opacity:"0.1",
     });

     $('.container').slick({
         infinite: true,
         slidesToShow: 2,
         slidesToScroll: 2,
         autoplay: true,
         arrows: false

         // variableWidth: true,
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

 function onScroll(event){
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


 $(window).bind('scroll',function(e){
     parallaxScroll();
 });

 function parallaxScroll(){
     var scrolled = $(window).scrollTop();
     $('#parallax-bg1').css('top',(0-(scrolled*.5))+'px');
     $('#parallax-bg2').css('top',(0-(scrolled*.35))+'px');

 }