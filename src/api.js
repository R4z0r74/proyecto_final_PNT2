import axios from 'axios'

export const getForecastByCity = async(cityName) => {

    const apiKey = "6ccf66b2986cc33810e6d5c56a7ff73e"
    const url = "https://api.openweathermap.org/data/2.5/"
    try{
        const response = await axios.get(url + "forecast", {
            params: {
                q : cityName,
                appid : apiKey,
                units: "metric",
                lang: "es"
            }
        })
        return response.data;

    } catch (e){
        console.log("Error Forecast")
        throw e;
    }

    
    
}

export const getWeatherByCity = async(cityName) => {

    const apiKey = "6ccf66b2986cc33810e6d5c56a7ff73e"
    const url = "https://api.openweathermap.org/data/2.5/"

    try{
        const response = await axios.get(url + "weather", {
            params: {
                q : cityName,
                appid : apiKey,
                units: "metric",
                lang: "es"
            }
        })
        return response.data;
    } catch (e){
        console.log("Error Forecast")
        throw e;
    }

   
}