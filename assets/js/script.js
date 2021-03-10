let letras=document.getElementById("letras");
let numeros=document.getElementById("numeros");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
let btn7=document.getElementById("btn7");
let btn8=document.getElementById("btn8");
let btn9=document.getElementById("btn9");
let btn0=document.getElementById("btn0");
let letrasTemp="";
let numerosTemp="";
let cont=0;
const logicaA1=()=>{
   if (cont<10) {
        if (letrasTemp==="") {
    letrasTemp="A";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="") {
    numerosTemp="1";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
    
    
    
}
const logicaB2=()=>{
     if (cont<10) {
        if (letrasTemp==="A") {
    letrasTemp="AB";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="1") {
    numerosTemp="12";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
   
}
const logicaC3=()=>{
 
       if (cont<10) {
        if (letrasTemp==="AB") {
    letrasTemp="ABC";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="12") {
    numerosTemp="123";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
   
    
}
const logicaD4=()=>{
     if (cont<10) {
        if (letrasTemp==="ABC") {
    letrasTemp="ABCD";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="123") {
    numerosTemp="1234";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
}
const logicaE5=()=>{
      if (cont<10) {
        if (letrasTemp==="ABCD") {
    letrasTemp="ABCDE";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="1234") {
    numerosTemp="12345";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
}
const logicaF6=()=>{
     if (cont<10) {
        if (letrasTemp==="ABCDE") {
    letrasTemp="ABCDEF";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="12345") {
    numerosTemp="123456";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
    
}
const logicaG7=()=>{
     if (cont<10) {
        if (letrasTemp==="ABCDEF") {
    letrasTemp="ABCDEFG";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="123456") {
    numerosTemp="1234567";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
    
}
const logicaH8=()=>{
     if (cont<10) {
        if (letrasTemp==="ABCDEFG") {
    letrasTemp="ABCDEFGH";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="1234567") {
    numerosTemp="12345678";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
    
}
const logicaI9=()=>{
     if (cont<10) {
        if (letrasTemp==="ABCDEFGH") {
    letrasTemp="ABCDEFGHI";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="12345678") {
    numerosTemp="123456789";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
    
}
const logicaJ0=()=>{
      if (cont<10) {
        if (letrasTemp==="ABCDEFGHI") {
    letrasTemp="ABCDEFGHIJ";
    letras.innerHTML =letrasTemp;
    cont++;
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   } else {
     
     if (numerosTemp==="123456789") {
    numerosTemp="1234567890";
    numeros.innerHTML =numerosTemp;
   
    } else {
        alert("No has terminado la secuencia de manera correcta");
    }
   }
}
btn1.onclick=function() {
    logicaA1();
}
btn2.onclick=function() {
    logicaB2();
}
btn3.onclick=function() {
    logicaC3();
}
btn4.onclick=function() {
    logicaD4();
}
btn5.onclick=function() {
    logicaE5();
}
btn6.onclick=function() {
    logicaF6();
}
btn7.onclick=function() {
    logicaG7();
}
btn8.onclick=function() {
    logicaH8();
}
btn9.onclick=function() {
    logicaI9();
}
btn0.onclick=function() {
    logicaJ0();
}

