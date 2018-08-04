
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

     // $("img").lazyload({effect:"fadeIn"});
     // $("a[rel='colorbox']").colorbox({current:"Фото {current} из {total}"});

     $("a[rel = 'colorbox']").colorbox({
         maxWidth:"100%",
         maxHeight:"100%",
         opacity:"0.1",
         // current: "изображение {current} из {total}"
     });

     // var left = 0,
     //     top = 0,
     //     element = $('body'),
     //     offset =  { left: element.offset().left, top: element.offset().top };
     //     element.bind('mousemove', function(e){
     //     left = (e.pageX-offset.left);
     //     top = (e.pageY-offset.top);
     //     $(this).css({
     //         backgroundPosition: '-'+(0.2*left)+'px -'+(0.15*top)+'px'
     //
     //     });
     // });

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
 // alert(prompt('Enter URL'));
// document.inner


//  $(function(){
//      var mouseX = 0, mouseY = 0, limitX = 150-10, limitY = 150-10;
// // Определяет границы, по которым будет двигаться объект
//      $(window).mousemove(function(e){
//          var offset = $('.move-wrap').offset();
//          mouseX = Math.min(e.pageX - offset.left, limitX);
//          mouseY = Math.min(e.pageY - offset.top, limitY);
// // Ищет координаты курсора
//          if (mouseX < 0) mouseX = 0;
// // С какого момента (координат) начинать движение за курсором
//          if (mouseY < 0) mouseY = 0;
// // Если курсор находится вне веб-страницы на момент загрузки, то установит объект в координатах x=0, y=0.
//
//      });
//
//      var follower = $("#follower");
//      var xp = 0, yp = 0; // Начальные координаты объекта на момент загрузки страницы
//      var loop = setInterval(function(){
// // Далее определяется скорость, с которой будет двигаться объект.
// // Изменить значение 20, для изменения скорости. Чем больше это значение, тем медленнее движется объект.
//
//          xp += (mouseX - xp) / 20;
//          yp += (mouseY - yp) / 20;
//          follower.css({left:xp, top:yp});
// // Изменение позиционирования объекта с помощью css
//
//      }, 10);
// //В данном случае это значение определяет, насколько плавно и быстро будет происходить движение
//  });


 // document.addEventListener("DOMContentLoaded", function () {
 //     var X = Y = 0;
 //
 //     function move() {
 //         document.getElementById('service').style.left = X + 'px';
 //         document.getElementById('service').style.top = Y + 'px';
 //     }
 //     document.addEventListener("mousemove", function (e) {
 //         X = e.clientX;
 //         Y = e.clientY;
 //     }, false);
 //
 //     setInterval(move, 100);
 // });

