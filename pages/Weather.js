import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import NavBar from './NavBar';

const Weather = () => {
  const [zip, setZip] = useState('');
  const [weather, setWeather] = useState([]);

  async function requestWeather() {
    const URL = `api.openweathermap.org/data/2.5/weather?zip=10538,us&appid={fd37e60fc523e2bcbade464eab3f667d
    }}`;
    const res = await fetch(URL);
    const json = await res.json();
    setWeather(json.data);
    console.log(json);
  }

  const handleOnSubmit = (e) => {
    requestWeather();
    e.preventDefault();
  };

  return (
    <div className={styles.main}>
      <NavBar />
      <h1>Where do you live?</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={(e) => setZip(e.target.value)}
          type="text"
          placeholder="Enter your zip code"
        />
        <input type="submit" value="submit" />
      </form>
      {weather.map((weather) => (
        <div key={weather.id}>
          <p>Description: {weather.description}</p>
        </div>
      ))}
      <p>{zip}</p>
    </div>
  );
};

export default Weather;
