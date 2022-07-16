screen_width = 0;
screen_height = 0;
draw_apple = "";
speak_data = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "The system is listening; please speak";
    recognition.start();
}

recognition.onresult = function(event) 
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;
    to_number = Number(content);
    if(Number.isInteger(to_number))
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing apples";
        draw_apple = "set";
    }

    else
    {
        document.getElementById("status").innerHTML = "The system has not recognized a number";
    }
}

function preload()
{
    apple = loadImage('https://toppng.com/free-image/apple-fruit-PNG-free-PNG-Images_6714')
}

function setup()
{
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height-150);
}

function draw()
{
if(draw_circle == "set")
{
    for(var i = 1; i <= to_number; i++)
    {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + "Apples drawn";
}
}
