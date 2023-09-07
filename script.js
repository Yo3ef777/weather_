var CityInput = document.getElementById('input');
var AddBTN = document.getElementById('btn');
var Cityname = document.getElementById('p');
var Description_name = document.getElementById('p1');
var temperature_name = document.getElementById('p2');
var Wind_name = document.getElementById('p3');
// picture
var Sun = document.getElementById('z');
var Moon = document.getElementById('z1');
var Strom = document.getElementById('z2');
var Rain = document.getElementById('z3');



const  ApiKey = "920e35b39de0a20b89ef32fa14367099";

function Conver(value){
    return (value -273).toFixed(3);
}

async function GetWeather(){
    var weatherResult =await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityInput.value}&appid=${ApiKey}`)).json();

    SetInfo(weatherResult)
}


function SetInfo(data) {
    var cityname =data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];

    Cityname.innerHTML=`City : ${cityname}` ;
    Description_name.innerHTML=`Description : ${description}` ;
    temperature_name.innerHTML=`temperature : ${Conver(temp)}`;
    Wind_name.innerHTML=`Wind : ${wind} km/h`;

    if (Conver(temp) > 28 && Conver(temp) < 40){
        Sun.style.zIndex="2";
    }else if (Conver(temp) > 10 && Conver(temp) < 25){
        Rain.style.zIndex="3";
        Sun.style.zIndex="-1";
    }else if (wind > 10 && wind < 20){
        Strom.style.zIndex="4";
        Rain.style.zIndex="-1";
        Sun.style.zIndex="-2";
    }
}
AddBTN.addEventListener("click" , GetWeather);