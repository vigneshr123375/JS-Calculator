 
 

function clicked(val) {


    document.getElementById("screen").value=document.getElementById("screen").value+val
    var audio = new Audio('audio/office-calculator-single-button-press.mp3');
    audio.play();
   
    
   }

   function dot( val){
   if(!document.getElementById('screen').value.includes(val)){
    document.getElementById("screen").value+=val;
   }
   var audio = new Audio('audio/office-calculator-single-button-press.mp3');
   audio.play(); 
   }


function clr(){
    document.getElementById("screen").value=""

    var audio = new Audio('audio/office-calculator-single-button-press.mp3');
  audio.play();
}

  function equal(){
    /*var text=document.getElementById("screen").value
     var result=eval(text)
     text=document.getElementById("screen").value=result
     let x = document.getElementById("screen").value 
     let y = eval(x) 
     
     document.getElementById("screen").value = y */
    

     var audio = new Audio('audio/office-calculator-single-button-press.mp3');
     audio.play();

     switch (operation) {
       case 1:
         answer=number+parseFloat(document.getElementById("screen").value)
         document.getElementById('screen').value=answer
         break;
       case 2:
        answer=number-parseFloat(document.getElementById("screen").value)
        document.getElementById('screen').value=answer
        break;
        case 3:
          answer=number*parseFloat(document.getElementById("screen").value)
          document.getElementById('screen').value=answer
          break;
          case 4:
            answer=number/parseFloat(document.getElementById("screen").value)
            document.getElementById('screen').value=answer
            break;

       default:
         
         break;
        
     }


     

 }
 function sqroot(){
   
   if(document.getElementById("screen").value!=""){
    var sqroot= document.getElementById('screen').value
    document.getElementById('screen').value=Math.sqrt(sqroot)
   
  }
  var audio = new Audio('audio/office-calculator-single-button-press.mp3');
     audio.play();
    
     
  }
  function square(){
    if(document.getElementById("screen").value!=""){
    var sqr= document.getElementById('screen').value
    document.getElementById('screen').value=Math.pow(sqr,2)
  }
  var audio = new Audio('audio/office-calculator-single-button-press.mp3');
  audio.play(); 
  }
 function reciprocal(){
  if(document.getElementById("screen").value!=""){
  var sqr= document.getElementById('screen').value
  document.getElementById('screen').value=1/sqr;
}
var audio = new Audio('audio/office-calculator-single-button-press.mp3');
audio.play(); 
 }
 function addition(){
   var str=document.getElementById("screen").value
   number=parseFloat(document.getElementById("screen").value)
   document.getElementById("screen").value=""
   operation=1;

   var audio = new Audio('audio/office-calculator-single-button-press.mp3');
   audio.play();
 }
 function sub(val){
  if(document.getElementById("screen").value==""){
    document.getElementById("screen").value=""+val
  }else{
    var str=document.getElementById("screen").value;
    number=parseFloat(document.getElementById("screen").value)
    document.getElementById("screen").value=""
    operation=2;
  }

  var audio = new Audio('audio/office-calculator-single-button-press.mp3');
  audio.play();
}
function mul(){
  var str=document.getElementById("screen").value
  number=parseFloat(document.getElementById("screen").value)
  document.getElementById("screen").value=""
  operation=3;

  var audio = new Audio('audio/office-calculator-single-button-press.mp3');
  audio.play();
}
function div(){
  var str=document.getElementById("screen").value
  number=parseFloat(document.getElementById("screen").value)
  document.getElementById("screen").value=""
  operation=4;

  var audio = new Audio('audio/office-calculator-single-button-press.mp3');
  audio.play();
}

function del(){
  document.getElementById("screen").value= document.getElementById("screen").value.slice(0,-1)

  var audio = new Audio('audio/office-calculator-single-button-press.mp3');
  audio.play();
}