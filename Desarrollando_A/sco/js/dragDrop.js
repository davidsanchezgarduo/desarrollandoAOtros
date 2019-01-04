var droped = false;
var Moviendo;    
var tamano = 0;
var vueltasDrag = 0;
var vezDrag = 0;
var vueltasDrop = 0;
var vezDrop = 1;
var buenas = 0;
var contador = 0;
var numBuenas = new Array;    

    
    
for(i=1;i<=NumDrags;i++){
    
numBuenas[i] = 0;
/*Estos son para los Drags*/    
$("#actividad").append('<div id="ele'+ i + '" class="drag"></div>');
console.log(i);    
$('#ele' + i).attr("value",i); 
$('.drag').css("width",anchoDrag + "px"); 
$('.drag').css("height",altoDrag + "px");
$('.drag').css("border-radius",radioDrag + "px");      
$('.drag').css("font-size",textSize); 
    


if(autoPos){  
if ( tamano > minEspacio ){
vueltasDrag = 0;
vezDrag++   
vezDrop = vezDrag + 1;
}
  
$('#ele' + i).css("top", (parseInt($('#ele' + i).css("height")) * SpacingTop ) * [vueltasDrag] + Padding );    
$('#ele' + i).css("left", (parseInt($('#ele' + i).css("width")) * 2)* vezDrag  );       
vueltasDrag++      
tamano = parseInt( $('#ele' + i).css("top") );    

    
    
$('#ele' + i).attr("posx",$('#ele' + i).css("left"));
$('#ele' + i).attr("posy",$('#ele' + i).css("top"));
    
}else{
    
$('#ele' + i).css("top", this['drag' + i + "PosY"]  + "px");    
$('#ele' + i).css("left", this['drag' + i + "PosX"]  + "px" );  
    
$('#ele' + i).attr("posx",$('#ele' + i).css("left"));
$('#ele' + i).attr("posy",$('#ele' + i).css("top"));    
    
}
   
        
    
$('#ele' + i).draggable({
     scroll: false,
    drag: function( event , ui){
    $(this).css("z-index",10);  
    droped = false;
    Moviendo = $(this).attr("value");
    },
    revert: function(event, ui) {
        $(this).css("z-index",10); 
            if(!droped){   
            TweenMax.to($('#ele' + Moviendo),1,{left:$('#ele' + Moviendo).attr("posx"),ease:Elastic.easeOut}); 
            TweenMax.to($('#ele' + Moviendo),1,{top:$('#ele' + Moviendo).attr("posy"),ease:Elastic.easeOut});     
             $(this).css("z-index",0); 
        }
    }
});     
    
}//DRAGS    
    

     
for(c=1;c<=NumDrops;c++){
    
    
/*Estos son para los Drops*/
$("#actividad").append('<div id="drop'+ c + '" class="drop"></div>');       
$('#drop' + c).attr("value",c); 
$('#drop'  + c).attr("ocupado",false);   
$('#drop'  + c).attr("objDentro",0);         
$('.drop').css("width",anchoDrop + "px"); 
$('.drop').css("height",altoDrop + "px");
$('.drop').css("border-radius",radioDrag + "px");      
$('.drop').css("font-size",textSize);  

    
    
if(autoPos){  
    console.log("drop: " + minEspacio);
if ( tamano > minEspacio ){
console.log("pasa");    
vueltasDrop = 0;
vezDrop++    
}
  
$('#drop' + c).css("top", (parseInt($('#drop' + c).css("height")) * SpacingTop ) * [vueltasDrop] + Padding );    
$('#drop' + c).css("left", (parseInt($('#drop' + c).css("width")) * 2)   * [vezDrop]  );       
vueltasDrop++      
tamano = parseInt( $('#drop' + c).css("top") );    
console.log(vezDrop);
    
    
$('#drop' + c).attr("posx",$('#drop' + c).css("left"));
$('#drop' + c).attr("posy",$('#drop' + c).css("top"));
    
}else{
    
$('#drop' + c).css("top", this['drop' + c + "PosY"]  + "px");    
$('#drop' + c).css("left", this['drop' + c + "PosX"]  + "px" );  
    
$('#drop' + c).attr("posx",$('#drop' + c).css("left"));
$('#drop' + c).attr("posy",$('#drop' + c).css("top"));    
    
}    
    

$('#drop' + c).droppable({
    accept: '.drag',
    drop: function( event, ui ) {
        
        droped = true;
        console.log("ocupado: " + $(this).attr("ocupado"));
        numDrop = $(this).attr("value");
        
        if( $(this).attr("ocupado") == "false" ){
        for(p=0;p<=hit[numDrop].length;p++){
             
            if (ui.draggable.is('#ele' + hit[numDrop][p])) {  

                
                if(numDrop == hit[numDrop][p]){
            //$('#ele' + hit[numDrop][p]).find(".option").css("background-color","green");
            $('#ele' + hit[numDrop][p]).find(".option").css("color","#FFF");  
            //buenas++
			   numBuenas[p] = 1;   
			     
                }else{
            //$('#ele' + hit[numDrop][p]).find(".option").css("background-color","red");
             $('#ele' + hit[numDrop][p]).find(".option").css("color","#FFF");  
			 numBuenas[p] = 0;        
                }
				
                 TweenMax.to($('#ele' + hit[numDrop][p]),1,{left:$(this).css("left"),ease:Back.easeOut}); 
                 TweenMax.to($('#ele' + hit[numDrop][p]),1,{top:$(this).css("top"),ease:Back.easeOut});                
                
                TweenMax.to($(this),1,{backgroundColor:"#a9e2b0",ease:Back.easeOut}); 
                $(this).attr("ocupado","true");
                $(this).attr("objDentro",$('#ele' + hit[numDrop][p]).attr("value"));   
                 //$('#ele' + hit[numDrop][p]).draggable("disable");
                contador++
				
				parent.pruebaIframe = 0;
				buenas = 0;
			  for(r=0;r<=hit[numDrop].length;r++){	
					if(numBuenas[r] == 1){
					buenas++;
					parent.pruebaIframe++;
					console.log("sumó buena ________________________________"); 
					}
				}
				
				
                if(contador == NumDrags){	
				
				/*TweenMax.fromTo($("#solucion_btn"),0.5,{scale:0,opacity:0},{scale:3,opacity:1,ease:Back.easeOut});    
	
					$("#solucion_btn").click(function(){
						TweenMax.to($("#solucion_btn"),0.5,{scale:0,opacity:1,ease:Back.easeOut});
                        for(var z=1;z<=NumDrags;z++){
							$('#ele' + hit[numDrop][z]).draggable("disable");
                        TweenMax.to($('#ele' + z),0.5,{left:$("#drop" + z).css("left"),top:$("#drop" + z).css("top"),ease:Back.easeOut,delay:1});   
						}
						if(buenas == NumDrags){    
                			TweenMax.fromTo($("#retro"),0.5,{scale:0,opacity:0},{scale:2,opacity:1,ease:Back.easeOut}); 
                		}
                    }); */	 
                }
                
                break;
            
            } else {
                 TweenMax.to($('#ele' + Moviendo),1,{left:$('#ele' + Moviendo).attr("posx"),ease:Elastic.easeOut}); 
                 TweenMax.to($('#ele' + Moviendo),1,{top:$('#ele' + Moviendo).attr("posy"),ease:Elastic.easeOut});                 
                
                 console.log("Incorrecto");
            }
     
        }//FOR
}else{
    
                 TweenMax.to($('#ele' + Moviendo),1,{left:$('#ele' + Moviendo).attr("posx"),ease:Elastic.easeOut}); 
                 TweenMax.to($('#ele' + Moviendo),1,{top:$('#ele' + Moviendo).attr("posy"),ease:Elastic.easeOut});     
    
    
                 console.log("OCUPADO!");  

}
        
    
    }//drop
    ,out: function( event, ui ) {
    console.log("FUERA!");    
    if (ui.draggable.is('#ele' + $(this).attr("objDentro") )) {
    console.log("se salio el Número: " + $(this).attr("objDentro") );
	numBuenas[$(this).attr("objDentro") ] = 0;
    $(this).attr("ocupado","false"); 
	contador--
	parent.pruebaIframe--;    
    }
        
        
    }
    });    
}//DROPS


