
// Length of the .drum array 
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //length of array//


// Adding event listener for clicking of drums  , introduces handleClick() function
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

// Defining handleClick function. Finally calls sound function with parameter as the button pressed
function handleClick() {
  var button_pressed = this.innerHTML;//this gives us the tag which is pressed(<button class="w drum">w</button>), we use inner html to get the letters inside the tags(w,a,s,d)
  
//   passing button_pressed to sound()
  sound(button_pressed); 

// animation
  buttonAnimation(button_pressed);

}


// Adding even listener for pressing of buttons, introduces button_pressed function
document.addEventListener("keydown",button_pressed);

//defining button_pressed function, calls the sound() function with the pressed key as parameter
function button_pressed(event)
{
    var key_pressed= event.key;
    console.log(key_pressed);

    // passing key pressed to sound ()
    sound(key_pressed);

    // animation
    buttonAnimation(key_pressed);
}



// parameters from both Keys and clicks are passed as pressed
function sound(pressed)
{
    
       
  
      switch (pressed) {
          case "w":
            {
              var audio = new Audio("sounds/tom-1.mp3");
              audio.play();
            }
      
            break;
      
          case "a":
            {
              var audio = new Audio("sounds/tom-2.mp3");
              audio.play();
            }
      
            break;
      
          case "s":
            {
              var audio = new Audio("sounds/crash.mp3");
              audio.play();
            }
      
            break;
      
          case "d": 
          {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
          }
      
          break;
      
          case "j":
              {
                  var audio = new Audio('sounds/kick-bass.mp3');
                  audio.play();
              }
      
              break;
      
          case "k":
              {
                  var audio = new Audio('sounds/tom-3.mp3');
                  audio.play();
              }  
              
      break;
      
          case "l":
              {
                  var audio = new Audio('sounds/tom-4.mp3');
                  audio.play();
              }    
      
          
            break;
      
            default:console.log(button_pressed);
        }
      
        
  
  }


//   animation function

  function buttonAnimation(currentKey)
  {
          var activeButton=document.querySelector("."+currentKey);   //will locate classes - .w,.a,.s etc

        //   adding animation classes
        activeButton.classList.add("pressed");  //however, it stays pressed//
        
        //removing animation classes after 0.9 sec of interval
        setTimeout(function(){activeButton.classList.remove("pressed")},0.9);



  }
