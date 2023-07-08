import React,{useEffect,useState} from "react" ;
import logoBackground from '../assets/wlogo.PNG';


const SearchWeather = () => {
  const [city,setCity] = useState(null);
  const [search,setSearch] = useState();
  useEffect(() => {
    const fetchApi = async() => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cf77298cee66a722f0f1e5f30842c49e`;
      const rjson = await fetch(url).then(response => response.json());
      setCity(rjson.main);
    }
    fetchApi();
  },[search])
        
    return(
      <>
         <div className="box">
         <h1 id = "applabel">WEATHER APP</h1> 
         <div className="inputData">
         <input type="text" placeholder="Weather in.." onChange = { (event) => {setSearch(event.target.value)} }/>
         <button>Search</button>
         </div>
         <img src={logoBackground} />
         {!city ?(
          <p className="ErrorMsg">Oops...!</p>
         ):
         (
          <div className="winfo">
          <h2 className="location">{search}</h2>
          <h1 className="temp" >   {city.temp} | {city.humidity} </h1>
         </div>
         )}
         </div>
      </>
    );
};

export default SearchWeather;