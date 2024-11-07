import axios from 'axios'

export const getForecastByCity = async(cityName) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_URL_BASE;

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
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_URL_BASE;

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
        console.log("Error Weather")
        throw e;
    }

}