import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({urlCharacter}) => {
  const [character, setCharacter] = useState({})

    useEffect(() =>{
    axios.get(urlCharacter)
    .then(res => setCharacter(res.data))
    },[urlCharacter])
    return (
      <>
       <div className='card'>
         <div className='card_image'>
         <img src={character.image} alt="" />
         </div>
         <div className='card_body'>
         <h2>Name: <span>{character.name}</span></h2>
       <ul>
         <li>Status: <span>{character.status}</span></li>
         <li>Birthplace: <span>{character.origin?.name}</span></li>
         <li>Episodes: <span>{character.episode?.length}</span></li>
       </ul>
           </div>   
    
        
        </div>
      </>
       
    );
};

export default ResidentInfo;