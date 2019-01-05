    var $slider = $('.page-slider')
    $slider.find('.panel:eq(0)').addClass('_active1');
    $slider.find('.nav-dot:eq(0)').addClass('active1');
     
    var $activeSlide = $slider.find('.panel._active');
    
   $('.pagijuego').on('click', function() {
      var slideToGo = $(this).data('slide');
      goToSlide(slideToGo);
      $('#mask, .window').hide();
    });
   
    function goToSlide(slideToGo) {
        $('.panel._active').removeClass('_active');
        $slider.find('.panel').eq(slideToGo -1).addClass('_active');
        $activeSlide = $slider.find('.panel').eq(slideToGo -1).addClass('_active');
        $slider.trigger('slide.changed');  
    }