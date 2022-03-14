import React from 'react';

const LocationInfo = ({location}) => {
    return (
        <>
        <div className='location_info'>
            <div className='name'>
            <h1>{location.name}</h1>
            </div>
            <div className='information'>
            <h2>Type: {location.type}</h2> <h2>Dimension: {location.dimension}</h2> <h2>Population: {location.residents?.length}</h2>
            </div>
          
        </div>
        </>
        
    );
};

export default LocationInfo;