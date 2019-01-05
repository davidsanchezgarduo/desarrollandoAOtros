var imgpath="img/";
var arr = new Array();



var usados = new Array();
var randomPregunta = new Array();    

    
function repetido(num) { 
    var repe = false; 
    for (i=0; i<=usados.length; i++) { 
        if (num == usados[i]) { 
            repe = true; 
        } 
    }
    
    return repe; 
}
    
function aleatorio(min, max){ 
if (usados.length-1 !=(max-min)) { 
        while (repe != false) { 
            var num = Math.floor(Math.random()*(max-min+1))+min; 
            var repe = repetido(num); 
        } 
        usados.push(num); 
        return num; 
    } else { 
        return null; 
    } 
}
    
    
for(c=0;c<=preguntas.length -1;c++){
    var numeroNuevo = aleatorio(0, preguntas.length-1); 
    randomPregunta[c] = numeroNuevo;
       
}

  
for(p=1;p<=NumPreguntas;p++){
        
    
    $("#quiz").find("#lista").append('<li id="q' + randomPregunta[p-1] + '" class="question"><br>'+ preguntas[randomPregunta[p-1]][0] + '<ol></ol>');  
    //alert(randomPregunta + " " +   preguntas[randomPregunta[p-1]][4]);
    arr[p-1] = preguntas[randomPregunta[p-1]][4];
    
    for(r=1;r<=NumOpciones;r++){
        
    $("#q" + randomPregunta[p-1]).find("ol").append('<li class="a' + r  +'"><label><input id=r'+ r +'_'+ randomPregunta[p-1]  +' type="radio" name="q'+ randomPregunta[p-1] + '">' + preguntas[randomPregunta[p-1]][r] +'</label></li></ol>');          
        
    }
}



$("#quiz").find("#lista").append('<iframe id="dragDrop" src="ac2.html" width="900" height="650" frameborder="0"></iframe>');

var pruebaIframe = 0;

$(document).ready(function(){
$(".reiniciar").hide();
$("input[type='radio']").attr("disabled",!1);
$("input[type='radio']").attr("checked",!1);
$(".submit").click(function(b){b.preventDefault();checkQuiz()});

$(".solucion").click(function(b){b.preventDefault();solucion()})});



function checkQuiz(){
	
    $(".submit").remove();
    $(".solucion").remove();
    $(".reiniciar").show();
    var b=0;
    var correctas = 0;    

    console.log("randomPregunta: " + randomPregunta);
    console.log("arr: " + arr);
    jQuery.each(arr,function(){
    
console.log($("#q"+ randomPregunta[b]).find("input[id='r" + arr[b] + "_"+randomPregunta[b] +"']:radio").is(':checked'));
        console.log(randomPregunta[b])
        
        if($("#q"+ randomPregunta[b]).find("input[id='r" + arr[b] + "_"+randomPregunta[b] +"']:radio").is(':checked')){
        correctas++;    
        }
        
       
        b++; 
    });
     
	console.log("Las correctas son: " + correctas);
	
	
    porcentaje = Math.round( ( parseInt(correctas) + pruebaIframe ) / 6 * 100);
	

    if(porcentaje <= 79){
        
     $("#ventana_1").find("#ventana_texto").append(RetroalimentacionMala);
	 $("#reiniciar").show();
       }else{
      $("#ventana_1").find("#ventana_texto").append(RetroalimentacionBuena(porcentaje));
           console.log("si llegó _______________________________" + porcentaje);
        parent.setScore_fun(porcentaje);
           parent.pagVista()
       }
    
    
    $("#ventana_1").show();	
    $("#ventana_1").css("opacity",1);
	
    fin();
    
    
    
	solucion();
}

function solucion(){
    $(".submit").remove();$(".solucion").remove();
    $(".reiniciar").show();
    var b=0;
    jQuery.each(arr,function(){
        b++;
        var a= $("#q"+b).attr("id");
        $("#"+a+" input:checked").closest("li").attr("class");
        //$("#"+a+" .a"+this).append("<img src='"+imgpath+"circle.png' class='png_bg' alt=''>");
		})

};

