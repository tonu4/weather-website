const container=document.querySelector('.container');
const search=document.querySelector('#search');
const weatherBox=document.querySelector('.weather-box');
const weatherDetails=document.querySelector('.weather-details');

search.addEventListener('click',async ()=>{
    console.log("hello");
    const APIKey='c3d880159f87d1098e3ad45c71f5683a';
    const city = document.querySelector('.serach-box input').value;
    console.log(city);
    if(city=='')
        return;

    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).
        then(Response=>Response.json()).
        then(json=>{
            const image=document.querySelector('.weather-box img');
            const temperatuer=document.querySelector('.weather-box .temperatuer');
            const discription=document.querySelector('.weather-box .discription');
            const humidity=document.querySelector('.weather-details .humidity .text .info-humidity ');
            const wind=document.querySelector('.weather-details .wind .text .info-wind');

            console.log(json)

            switch(json.weather[0].main){
                case 'Clear':
                image.src='images/clear.png';
                break;

                case 'Rain':
                image.src='images/rain.png';
                break;

                case 'Snow':
                image.src='images/snow.png';
                break;

                case 'Clouds':
                image.src='images/cloud.png';
                break;

                case 'Mist':
                image.src='images/mist.png';
                break;

                case 'Haze':
                image.src='images/mist.png';
                break;


                default:
                    image.src='images/cloud.png';
            }

            temperatuer.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`
            discription.innerHTML=`${(json.weather[0].description)}`
            humidity.innerHTML=`${parseInt(json.main.humidity)}<span>%</span>`
            wind.innerHTML=`${parseInt(json.wind.speed)} Km/h`
});


});








// {
//     "coord": {
//         "lon": 139.7531,
//         "lat": 35.6854
//     },
//     "weather": [
//         {
//             "id": 802,
//             "main": "Clouds",
//             "description": "scattered clouds",
//             "icon": "03n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 8.85,
//         "feels_like": 6.3,
//         "temp_min": 6.09,
//         "temp_max": 9.93,
//         "pressure": 1021,
//         "humidity": 64,
//         "sea_level": 1021,
//         "grnd_level": 1018
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 4.63,
//         "deg": 170
//     },
//     "clouds": {
//         "all": 40
//     },
//     "dt": 1735132895,
//     "sys": {
//         "type": 2,
//         "id": 268395,
//         "country": "JP",
//         "sunrise": 1735076921,
//         "sunset": 1735111992
//     },
//     "timezone": 32400,
//     "id": 1861060,
//     "name": "Japan",
//     "cod": 200
// }