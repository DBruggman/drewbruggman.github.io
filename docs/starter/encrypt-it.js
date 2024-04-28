/*
* Starter file 
*/
(function() {
  //"use strict";
  
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
  */
 window.addEventListener("load", init);
 
 /**
  * TODO: Write a function comment using JSDoc.
 */
function init() {
  // Note: In this function, we usually want to set up our event handlers
  // for UI elements on the page.
  console.log("Window loaded!");
  document.querySelector("#encrypt-it").addEventListener("click",clickEncryptItButton);
  document.querySelector("#reset").addEventListener("click",clickResetButton);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function clickEncryptItButton(){
    console.log("Button clicked!");
    
    let text = document.querySelector("#input-text").value.toLowerCase();
    let charVal = 0;
    let encryptedText = "";

    //shift encrypt content
    for(let i = 0; i < text.length; i++){
       
      charVal = text.charCodeAt(i);
      //console.log("in: " + charVal + " as char: " + String.fromCharCode(charVal));
      
      if(charVal < 'a'.charCodeAt(0) || charVal > 'z'.charCodeAt(0)){

      }
      else if(charVal == 'z'.charCodeAt(0)){
        charVal = 'a'.charCodeAt(0);
      }else{
        charVal++;
      }
      
      //console.log("out: " + charVal + " as char: " + String.fromCharCode(charVal));
      encryptedText += String.fromCharCode(charVal);

      document.querySelector("#result").innerText = encryptedText;

    }

    let result = document.querySelector("#result");
    
    result.value = encryptedText;

  }

  //a = 97
  //z = 122
  //A = 65
  //Z = 90

  //z + 1 = 123
  //b = 98
  // (123)%122 + 97

  function clickResetButton(){
    document.querySelector("#input-text").value = '';
  }

})();
