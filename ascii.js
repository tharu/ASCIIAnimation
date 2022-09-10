var animationSpeed = 250;

function anime() 
{
    console.log(ANIMATIONS[document.getElementById('animation').value]);
    document.getElementById('text-area').value = ANIMATIONS[document.getElementById('animation').value];
}


function sizes() 
{
    document.getElementById('text-area').style.fontSize = document.getElementById('size').value + "pt";
}

function turbo() 
{
    animationSpeed = document.getElementById('speed').checked ? 50 : 250;
}

window.onload=function()
{
     var start= document.getElementById("start");
     start.onclick=startAnimation;

     var stop= document.getElementById("stop");
     stop.onclick=stopAnimation;

     var aniamtion= document.getElementById("animation");
     animation.onchange=changeAnimationType;

     var font=document.getElementById("font-size");
     font.onchange=changeFont;    
}

function startAnimation() 
{
    console.log("starting");
    document.getElementById('stop').disabled = false;
    document.getElementById('start').disabled = true;
    document.getElementById('animation').disabled = true;

    // let texts = ANIMATIONS[document.getElementById('animation').value].split("=====\n");
    let texts = document.getElementById('text-area').value.split("=====\n");
    let idx = 0;

    var displayFunction = function() 
    {
        document.getElementById('text-area').value = texts[idx];
        idx = (idx + 1) % texts.length;
        setTimeOutID = setTimeout(displayFunction, animationSpeed);
    };
    setTimeOutID = setTimeout(displayFunction, animationSpeed);
};


function stopAnimation() 
{
    console.log("stopping");
    document.getElementById('stop').disabled = true;
    document.getElementById('start').disabled = false;
    document.getElementById('animation').disabled = false;
    clearTimeout(setTimeOutID);
    document.getElementById('text-area').value = ANIMATIONS[document.getElementById('animation').value];
};

function changeAnimationType()
{
    document.getElementById("text-area").value=ANIMATIONS[document.getElementById('animation').value];
}

function changeFont()
{
    switch(document.getElementById("font-size").value) {
        case 'Tiny':
            document.getElementById("text-area").className="textareaTinyF";
            break;
         case 'Small':
            document.getElementById("text-area").className="textareaSmallF";
          break;
         case 'Medium':
            document.getElementById("text-area").className ="textarea";
            break;
         case 'Large':
            document.getElementById("text-area").className="textareaLargeF";         
             break;
         case 'Extra Large':
            document.getElementById("text-area").className="textareaExtraLargeF";
                break;
         case 'XXL':
            document.getElementById("text-area").className="textareaXXLF";
            break;
         default:
            document.getElementById("text-area").className="textarea";
      }
      var text= document.getElementById("text-area").fontSize;
}