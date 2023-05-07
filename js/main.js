// Add Default Local Storage class on body
document.body.classList.add(localStorage.getItem('product') || 'red');
// 
let element = document.querySelectorAll('.color-switcher li');
let classesList=[];

// loop on Element

for(let i = 0 ; i < element.length; i++){
    
        //get classList

        classesList.push(element[i].getAttribute('dataColor'));

        element[i].addEventListener("click", function(){    
        // remove Ali Class
        document.body.classList.remove(...classesList);

        // add current Class From Attribute
         document.body.classList.add(this.getAttribute('dataColor'));

        // Add Data To localStorage

         localStorage.setItem("product",this.getAttribute('dataColor'));

       
    },false);
   
};

//

function capital(string){

   let oldArray = string.split(' '),

     newArray = [];

     for(let i = 0; i < oldArray.length; i++){
        
newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1))
     }
     return newArray.join(' ');
}
console.log(capital('elzero web school'));

// Tampelt3


 let cont = document.getElementById('cont'),
 text = document.getElementById('text'),
 maxLength = text .getAttribute('maxLength');

 console.log(maxLength);


 text.oninput = function (){
     cont.innerHTML = maxLength - this.value.length;



     if(cont.innerHTML == 0) {

     cont.classList.add('zero'); 


     }else{
          cont.classList.remove('zero');
     }

 };

//  

// Tamplet4

let myInput = document.getElementById('m_input');

myInput.onfocus = function (){
     'use strict';
     // store placeholder attr backup attr

     this.setAttribute('data-place' ,this.getAttribute('placeholder'));

          // Empty placeholder Attr

     this.setAttribute('placeholder','');
};
myInput.onblur = function (){
     'use strict';

     // get placeholder Attr from backup

     this.setAttribute('placeholder',this.getAttribute('data-place'));
     
     // Empty backup Attr

     this.setAttribute('data-place','');
};

// 

// Tamplet5

let myText = 'Hello Elhdidy Web School This is Type write Effects on Text ',

     i = 0,    
     myButton = document.getElementById('button');

     myButton.onclick= function () {

     'use strict';
 
     let typeWrite = setInterval(function(){
           
          document .getElementById ('type').textContent += myText[i];
          
          i = i + 1 ;
          
          if (i > myText.length - 1 ){

               clearInterval (typeWrite);
          } 
          // write speed
     },   50);

     };

     // Tamplet6 show password


     let pass = document.getElementById('password'),

     myB = document .getElementById('m-p');

myB.onclick = function(){

     'use strict';

if(this.textContent == 'show password'){

     pass.setAttribute('type','text');

     myB.textContent = 'Hide password';

}else{

 pass.setAttribute('type','password');

     this.textContent = 'show password';
}

};

     // Tamplet 7 Random class on body

let classesList2 = ['class-one','class-Tow','class-Three','class-Four','class-Five'];

randomKey = Math.floor(Math.random() * classesList2.length);


document .body .setAttribute ('class', classesList2 [randomKey]);

     // Tamplet 8 


document . getElementById ('title2').onkeyup = function(){
 
     "use strict";
document . getElementById ('titleLive').textContent=this.value;
};

document . getElementById ('content2') .onkeyup = function (){
     'use strict';

document . getElementById ('contentLive') .textContent = this.value;
};

     // Tamplet 9 clock

function showTime(){
     let now = new Date (),
hours = now.getHours (),
minutes = now.getMinutes (),
seconds = now.getSeconds ();

if(hours < 10){
     hours = '0' +hours;
}
if(minutes < 10){
     minutes = '0' +minutes;
}
if(seconds < 10){
     seconds= '0' +seconds;
}
document .getElementById('clock').textContent = hours+':'+minutes+":"+seconds;
}


window.onload = function(){
     'use strict';

     setInterval(showTime, 500)
}