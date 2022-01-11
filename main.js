x = 0;
y = 0;
screenWidth=0;
screenheight=0;
apple=0;
speak_data=0;
to_number=0;

function preload() {
    apple=loadImage("apple.jpeg")
}

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

    to_number=Number(content);
    if(Number.isINTEGER(to_number))  {
      document.getElementById("status").innerHTML="Started Drawing Apple";
      drawApple="set";
    }
    else {
      document.getElementById("status").innerHTML="The speech has not been recognised a number";
    }
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width= window.innerWidth
 screen_height= window.innerheight
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }

  
}

createCanvas(screen_width,screen_height-150)
 {
canvas.position(100)
}


function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}