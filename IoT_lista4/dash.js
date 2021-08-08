
setInterval(sendToServer,1000);


var state, lampada = false;


function thingspeak()
{
    setInterval(sendToServer,1000);
}

function liga()
{
    document.getElementById("luz1").src= "https://i.postimg.cc/ryd5mtDw/Lon1.png";
    lampada = true;


}
function desliga()
{
    document.getElementById("luz1").src= "https://i.postimg.cc/g0nY2w9p/Loff.png";
    lampada = false;
}

function sendToServer()
{
    if(lampada == true)
    {
        state = getRndInteger(200,1000);
    }
    else
    {
        state = 0;
    }

    var KEY = "ADU0DWKIRAUB13V8";

    

    const http = new XMLHttpRequest();
    http.open("GET","https://api.thingspeak.com/update?api_key="+ KEY +"&field2=0"+state);
    http.send();
    http.onload = console.log(http.responseText+""+state)

}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

