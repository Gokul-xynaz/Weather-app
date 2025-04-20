import './App.css';
import React, { useState } from 'react';
import Search from './components/Searchbar/Search';
import Weather from './components/WeatherDisplay/Weather';

function App() {
  const [city, setCity] = useState('New York'); 

  return (
    <>
      <Search setState={setCity} />         
      <Weather city={city} />             
    </>
  );
}

export default App;
