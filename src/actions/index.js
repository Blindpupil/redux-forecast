import axios from 'axios';
import API_KEY from '../config/keys';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},fr`;
  const request = axios.get(url); // returns a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}