import  React from 'react' ;
import './App.css';
import SearchWeather from "./components/search" ;
import WeatherInfo from "./components/info";


function App() {
  return (
   <>
     <SearchWeather/>
     <WeatherInfo/>
   </>
  );
}
export default App;