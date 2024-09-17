
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import SearchBox from './components/SearchBox';



function App() {
  const [location , setLocation] = useState({})
  useEffect (() => {
    const random = Math.floor(Math.random() * 126) + 1 ;
   axios.get(`https://rickandmortyapi.com/api/location/${random}`)
   .then(res => setLocation(res.data))

  },[])

  console.log('Hello')
 
  return (
    <div className="App">
     
     
      <SearchBox setLocation ={setLocation}/>
     <LocationInfo location={location} />
     <ResidentsList character={location?.residents} />
      
     
    
    
    </div>
  );
}

export default App;
