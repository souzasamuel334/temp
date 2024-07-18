document.getElementById("cliForm").addEventListener("submit", function(event){
event.preventDefault();

const cidade = document.getElementById("cidInput").value;
const apiKey = "d7a8d944e376f6e9e6fd3af2bb39f6d9";
const url = `https://api.openweathermap.org/data/3.0/onecall/timemachine?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

if (cidade){
    fetch(url)
    .then(respons => respons.json())
    .then(data => {
        if (data.cod === "404"){
            document.getElementById("resultado").textContent = "Não foi possivel achar a cidade informada!";
        } else {
            const temp = data.main.temp;
            const description = data.weather.description; 
            
        }
    })
}


})