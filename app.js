window.addEventListener('load', ()=> {
    let lon;
    let lat;

    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

    let ubicacion = document.getElementById('ubicacion');
    let iconoAnimado = document.getElementById('icono-animado');

    let vientoVelocidad = document.getElementById('viento-velocidad');


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            //console.log(posicion.coords.latitude);
            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            //ubiacion actuakl
            //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=42ca8eed3ad422f5938faab28ac899df`

            //ubiacion por ciudad
            const url = `https://api.openweathermap.org/data/2.5/weather?q=New York&lang=es&units=metric&appid=42ca8eed3ad422f5938faab28ac899df`           //console.log(url);
            fetch(url)
                .then( response => { return response.json() })
                .then( data => {
                    let temp = Math.round(data.main.temp);
                    temperaturaValor.textContent = `${temp} °C  `;
                    let desc = data.weather[0].description;
                    temperaturaDescripcion. textContent =  desc;


                    ubicacion.textContent = data.name;

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`
                    
                    console.log(data.weather[0].main)

                    switch (data.weather[0].main) {

                       case 'Thunderstorm':

                        iconoAnimado.src = 'iconos/animated/thunder.svg';
                        break; 

                        case 'Drizzle':

                        iconoAnimado.src = 'iconos/animated/cloudy-day-1.svg';
                        break; 

                        case 'Rain':

                        iconoAnimado.src = 'iconos/animated/rainy-7.svg';
                        break; 
    
                        case 'Snow':
    
                        iconoAnimado.src = 'iconos/animated/snowy-6.svg';
                        break; 


                        case 'Clear':

                        iconoAnimado.src = 'iconos/animated/day.svg';
                        break; 
    
                        case 'Atmosphere':
    
                        iconoAnimado.src = 'iconos/animated/weather.svg';
                        break; 
    
                        case 'Clouds':
    
                        iconoAnimado.src = 'iconos/animated/cloudy-day-1.svg';
                        break; 
                        
                        case 'Fog':
    
                        iconoAnimado.src = 'iconos/animated/cloudy-day-2.svg';
                        break; 

                        default:
                            iconoAnimado.src='animated/cloudy-day-1.svg';

 
                    }

                    console.log(data);
                })
                .catch( error => {
                    console.log(error);
                })
        })

    }
})