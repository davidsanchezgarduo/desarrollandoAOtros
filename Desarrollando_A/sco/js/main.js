var _ButtonsMenu = $(".botones");
var _barMenu = $(".menuContainer");
var _MenuMobil = $("#menumovil");
var detectDevice;
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

$("#menumovil").hide();
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
     detectDevice = true;
  }
 else {
    detectDevice =  false;
  }

if(!detectDevice){
_ButtonsMenu.mouseover(function(){
   $(this).css("background-color","#e3e2e2"); 
});
_ButtonsMenu.mouseout(function(){
   $(this).css("background-color","transparent"); 
});

_barMenu.mouseover(function(){
    TweenMax.to(this,0.3,{alpha:1});
});
_barMenu.mouseout(function(){
   TweenMax.to(this,0.5,{alpha:0});
});
}else{
    $("#menumovil").show();
}

$("#navButtons").mouseover(function(){
    TweenMax.to(this,0.3,{alpha:1});
});
$("#navButtons").mouseout(function(){
   TweenMax.to(this,0.5,{alpha:0});
});


var activeMenuMobil = false;
_MenuMobil.click(function(){
    if(!activeMenuMobil){
        $("#menuBar").css("display","block");
        TweenMax.to($("#menuBar"),0.3,{alpha:1});
        TweenMax.to(_barMenu,0.3,{alpha:1});
        activeMenuMobil = true;
    }else{
        $("#menuBar").css("display","none");
        TweenMax.to($("#menuBar"),0.5,{alpha:0});
        TweenMax.to(_barMenu,0.5,{alpha:0});
        activeMenuMobil = false;
    }
});


var themes = 3;
var countSlide = 0;
var activeButton;
var listSlides = [
     {slide:"slide3",name:"Bienvenido"},
     {slide:"slide5",name:"¡Recorre la ruta que puede salvar tu vida!"},
   {slide:"slide11",name:"Tema 2"},
    {slide:"slide19",name:"Tema 3"},
     {slide:"slide25",name:"Tema 4"}
]



var module0 = [
    {slide:"slide3",name:"Bienvenido"},
    {slide:"slide1",name:"Recomendaciones de navegación"},
    {slide:"slide2",name:"Objetivo"},
    {slide:"slide3",name:"Temas a revisar"},
    {slide:"slide4",name:"¡Muy bien!"}
]

var module1 = [
    {slide:"slide5",name:"¡Recorre la ruta que puede salvar tu vida!"},
    {slide:"slide7",name:"Responsabilidades y derechos de los empleados."},
    {slide:"slide8",name:"Empecemos por conocer nuestros derechos y responsabilidades"},
    {slide:"slide9",name:"Derechos y responsabilidades"},
    {slide:"slide10",name:"¡Recorre la ruta que puede salvar tu vida!"},
]

var module2 = [
    
    {slide:"slide11",name:"Tema 2"},
    {slide:"slide12",name:"Tres elementos que pueden salvar tu vida"},
    {slide:"slide13",name:"Rutas de evacuación"},
    {slide:"slide14",name:"Punto de reunión"},
    {slide:"slide15",name:"Salida de emergencia"},
    {slide:"slide16",name:"Recordemos"},
    {slide:"slide17",name:"¡Sigamos avanzando!"},
    {slide:"slide18",name:"¡Recorre la ruta que puede salvar tu vida!"}
    
]
var module3 = [
  
    {slide:"slide19",name:"Tema 3"},
    {slide:"slide20",name:"Saber cuándo y cómo evacuar depende de la identificación de alertas y alarmas."},
    {slide:"slide21",name:"Recuerda"},
    {slide:"slide22",name:"Ya sabes los procedimientos para evacuar"},
    {slide:"slide23",name:"Lista de técnicas de evacuación"},
    {slide:"slide24",name:"¡Recorre la ruta que puede salvar tu vida!"}
    ]

var module4 = [
    {slide:"slide25",name:"Tema 4"},
    {slide:"slide26",name:"Diagrama de proceso"},
    {slide:"slide27",name:" las cuatro insignias"}
]

var module5 = [
]

function loadModule(moduloChoice){
    $("#subNavButtons").html("");
   for(var i = 1;i<=moduloChoice.length;i++){
    $("#subNavButtons").append(
    `<div id="subButtonTheme`+i+`" class="SubButtonModule"><p></p></div>`)
    $("#subButtonTheme" + i).attr("index",i-1); 
    $("#subButtonTheme" + i).attr("active",0);  
    
    $("#subButtonTheme" + i).mouseover(function(){
        if($(this).attr("active") == 0){
            $(this).css("background-color","#333"); 
            TweenMax.to(this,0.5,{scale:2});  
        }

    })
            
    $("#subButtonTheme" + i).mouseout(function(){
        if($(this).attr("active") == 0){
            $(this).css("background-color","#ccc"); 
            TweenMax.to(this,0.5,{scale:1});
        }
    });
            
    $("#subButtonTheme" + i).click(function(){
        var movie = $(this).attr("index");
        TweenMax.to($(".SubButtonModule"),0.5,{scale:1,alpha:0.3});
        TweenMax.to($(this),0.3,{scale:2,alpha:1});
        $(".SubButtonModule").attr("active",0); 
        $(this).attr("active",1); 
        cortinillaTweenModule(moduloChoice,movie)   
    })
            
   } 
    
$("#subButtonTheme1").attr("active",1); 
$("#subButtonTheme1").css("background-color","#333"); 
TweenMax.to($("#subButtonTheme1"),0.5,{scale:2});    
    
}



for(var i = 1;i<=listSlides.length;i++){
    $("#navButtons").append(
    `<div id="buttonTheme`+i+`" class="buttonModule"></div>`)
    $("#buttonTheme" + i).attr("index",i-1); 
    $("#buttonTheme" + i).attr("active",0);        
    $("#buttonTheme" + i).mouseover(function(){
        if($(this).attr("active") == 0){
            $(this).css("opacity",1); 
            TweenMax.to(this,0.5,{scale:2});  
        }

    })
            
    $("#buttonTheme" + i).mouseout(function(){
        if($(this).attr("active") == 0){
            $(this).css("opacity",0.5); 
            TweenMax.to(this,0.5,{scale:1});
        }
    });
            
    $("#buttonTheme" + i).click(function(){
        var movie = $(this).attr("index");
        TweenMax.to($(".buttonModule"),0.5,{scale:1,alpha:0.3});
        TweenMax.to($(this),0.3,{scale:2,alpha:1});
        $(".buttonModule").attr("active",0); 
        $(this).attr("active",1); 
        cortinillaTween(movie)  
        
        switch(movie){
            case "0":
                loadModule(module0);
                $("#barAdvance").css("width","5%");
                break;
            case "1":
                loadModule(module1);
                $("#barAdvance").css("width","20%");
                break;
            case "2":
                loadModule(module2);
                $("#barAdvance").css("width","35%");
                break;
        
            case "3":
                loadModule(module3);
                $("#barAdvance").css("width","65%");
                break;
        
            case "4":
                loadModule(module4);
                $("#barAdvance").css("width","75%");
                break;
            case "5":
                loadModule(module5);
                $("#barAdvance").css("width","100%");
                break;
        }
    })
            
}

function cortinillaTween(movie){
    $("#cortinilla").css("display","block");
    $("#cortinilla").css("background-color","#f0a10e");
    $("h1").text(listSlides[movie].name);
    TweenMax.fromTo($("#cortinilla"),0.5,{top:"0%",height:"0%"},{height:"100%"});
    TweenMax.to($("#cortinilla"),0.5,{top:"-100%",delay:1,onComplete:loadMovie}); 
    TweenMax.to($(".SubButtonModule"),0.5,{scale:1,alpha:0.3});
    function loadMovie(){
        TweenMax.fromTo($("#loadMovies"),1,{alpha:0},{alpha:1,delay:1});
        $("#loadMovies").attr("src","content/"+ listSlides[movie].slide +"/index.html"); 
    }
}

function cortinillaTweenModule(modulo,movie){
    $("#cortinilla").css("display","block");
    $("#cortinilla").css("background-color","#4059A7");
    $("h1").text(modulo[movie].name);
    TweenMax.fromTo($("#cortinilla"),0.5,{left:"0%",width:"0%"},{width:"100%"});
    TweenMax.fromTo($("#cortinilla").find("h1"),0.5,{alpha:0,scaleY:0},{scaleY:1,alpha:1,delay:1});
    TweenMax.to($("#cortinilla").find("h1"),0.5,{alpha:0,scaleY:0,delay:3,onComplete:loadMovie});
    TweenMax.to($("#cortinilla"),0.5,{left:"100%",delay:4}); 
    
    function loadMovie(){
        $("#loadMovies").attr("src","content/"+ modulo[movie].slide +"/index.html"); 
    }
}

cortinillaTween(0);
function activeButton(num){
        var movie = $("#subButtonTheme" + num).attr("index");
        TweenMax.to($(".SubButtonModule"),0.5,{scale:1,alpha:0.3});
        TweenMax.to($("#subButtonTheme" + num),0.3,{scale:2,alpha:1});
        $(".SubButtonModule").attr("active",0); 
        $("#subButtonTheme" + num).attr("active",1); 
}


$("#buttonTheme1").attr("active",1); 
$("#buttonTheme1").css("opacity",1);
$("#barAdvance").css("width","5%");
TweenMax.to($("#buttonTheme1"),0.5,{scale:2});
loadModule(module0);



