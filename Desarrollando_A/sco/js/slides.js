// reproductor de musica de fondo
var player = document.getElementById("au1");

function audioPause(){
  $(player).trigger('pause');
}
function audioPlay(){
  $(player).trigger('play');
}

function rep222(){
  $(".voz").pause();
  audio222.play();
}

function rep222Pause(){

  audio222.pause();
}

//Cargar contenido de página 1 desde el inicio
$.get("paginas/pagina-1.html", function(htmlexterno1){
  $("#section-1 .section-content").html(htmlexterno1);
  //audioPlay();
});

$('.page-slider').each(function() {
    var $slider =  $(this);
    var numberOfSlides = $slider.find('.panel').length;
    var actual = 1;
    
    $("#pagina").text(actual +'/'+numberOfSlides);
    
    
    $slider.find('.panel:eq(0)').addClass('_active');
    $slider.find('.nav-dot:eq(0)').addClass('active');
     
    var $activeSlide = $slider.find('.panel._active');
    var $nextBtn = $slider.find('.next-btn');
    var $prevBtn = $slider.find('.prev-btn');
  
    
    $('.nav-dot, #btnHome, .nvIndice, .pagijuego').on('click', function() {
      var slideToGo = $(this).data('slide');
      goToSlide(slideToGo);  
      
      // detenemos los audios de voz en off al cambiar de slide 
      $('.voz').on('play', function () { //cuando un audio empieza a reproducirse
        var current=this;
        $('.voz').each(function() { 
          if (this!== current) { //todos los demás
            this.pause();  //los pausamos
          }
        });
      });

    });

    $('.nvindice, .pagijuego').on('click', function() {
      var slideToGo = $(this).data('slide');
      goToSlide(slideToGo);
      $('#mask, .window').hide();
      // detenemos los audios de voz en off al cambiar de slide 
      $('.voz').on('play', function () { //cuando un audio empieza a reproducirse
        var current=this;
        $('.voz').each(function() { 
          if (this!== current) { //todos los demás
            this.pause();  //los pausamos
          }
         });
      });
    });

    
    $slider.on('slide.changed', function() {
      $('.nav-dot').removeClass('active');
      var $activeDot = $('.nav-dot[data-slide="'+$('.panel._active').data('slide')+'"]');
      $activeDot.addClass('active');
      var actual = $('.panel._active').data('slide');
      $("#pagina").text(actual +'/'+numberOfSlides);
      
      //Cargar contenido de pagina de acuerdo al slide 
       $.get("paginas/pagina-"+actual+".html", function(htmlexterno){
        $("#section-"+actual+" .section-content").html(htmlexterno);
      // detenemos los audios de voz en off al cambiar de slide 
        $('.voz').on('play', function () { //cuando un audio empieza a reproducirse
          var current=this;
          $('.voz').each(function() { 
            if (this!== current) { //todos los demás
              this.pause();  //los pausamos
            }
           });
        });

      });
      
      
      
  
    });
           $("#target").click(function() {
            nextSlide();
          });

          /*function alto(){
            getElementById("au1").stop();
          }*/

  
  
   function nextSlide() {
      $activeSlide = $slider.find('.panel._active');
      var $nextSlide = $activeSlide.next('.panel');
      $activeSlide.removeClass('_active');
      $nextSlide.addClass('_active');
      
      var slideIndex = $slider.find('.panel._active').index('.panel');
    
      if(slideIndex >= numberOfSlides || slideIndex <= -1 ) {
        firstSlide();
        $slider.trigger('slide.changed');  
      }else {
        $slider.trigger('slide.changed');
      }
      
    } 
    
    function goToSlide(slideToGo) {
        $('.panel._active').removeClass('_active');
        $slider.find('.panel').eq(slideToGo -1).addClass('_active');
        $activeSlide = $slider.find('.panel').eq(slideToGo -1).addClass('_active');
        $slider.trigger('slide.changed');  
    }
      
  });