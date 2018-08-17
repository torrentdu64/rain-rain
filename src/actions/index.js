import axios from 'axios';

const API_KEY = "c632991d3940903768ddbe468969a101";

const BASE_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


function fetchWeather(city){
  const url = `${BASE_URL}&q=${city},nz`;
  const promise = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: promise
  };
}
