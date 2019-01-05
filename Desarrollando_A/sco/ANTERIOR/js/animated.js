$.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };
  
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));
  
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
  
        if (typeof callback === 'function') callback();
      });
  
      return this;
    },
  });

  /*

  /////////////// Clases de animación

bounce
flash
pulse
rubberBand
shake
headShake
swing
tada
wobble
jello	
bounceIn
bounceInDown
bounceInLeft	
bounceInRight	
bounceInUp	
bounceOut
bounceOutDown	
bounceOutLeft	
bounceOutRight	
bounceOutUp
fadeIn	
fadeInDown
fadeInDownBig	
fadeInLeft
fadeInLeftBig
fadeInRight ---------------- Se desliza y aparece desde derecha
fadeInRightBig ------------- Se desliza y aparece mas lento desde derecha
fadeInUp
fadeInUpBig
fadeOut
fadeOutDown
fadeOutDownBig ------------- Se desliza y desaparece mas lento hacia abajo
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutUp	
fadeOutUpBig	
flipInX	
flipInY
flipOutX	
flipOutY	
lightSpeedIn	------------- Entra y frena como carro
lightSpeedOut
rotateIn	----------------- Rota con fade in
rotateInDownLeft	
rotateInDownRight	
rotateInUpLeft
rotateInUpRight	
rotateOut	
rotateOutDownLeft	
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight	
hinge	 ------------------- Cuelga y se cae
jackInTheBox ------------- Entra desacomodado y se acomoda
rollIn ------------------- Entra haciendo un giro
rollOut	
zoomIn	
zoomInDown
zoomInLeft	
zoomInRight	
zoomInUp	
zoomOut
zoomOutDown	
oomOutLeft	
zoomOutRight	
zoomOutUp
slideInDown	
slideInLeft	
slideInRight	------------ Se desliza entra desde derecha
slideInUp
slideOutDown	
slideOutLeft	
slideOutRight	
slideOutUp
heartBeat


  ////////////// La animación en los elementos
  
  $('#yourElement').animateCss('bounce');

  ///////// Con funcion despues de la animación
  
  $('#yourElement').animateCss('bounce', function() {
    // Do somthing after animation
  });

  ////////////Se puede modificar los parametros de animación

  .yourElement {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}

| Class Name | Delay Time |
| ---------- | ---------- |
| `delay-2s` | `2s`       |
| `delay-3s` | `3s`       |
| `delay-4s` | `4s`       |
| `delay-5s` | `5s`       |

////////////Por default

| Class Name | Speed Time |
| ---------- | ---------- |
| `slow`     | `2s`       |
| `slower`   | `3s`       |
| `fast`     | `800ms`    |
| `faster`   | `500ms`    |

  
  */