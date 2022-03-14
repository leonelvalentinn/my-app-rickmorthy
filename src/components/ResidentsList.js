import React from 'react';
import ResidentInfo from '../ResidentInfo';

const ResidentsList = ({character}) => {
    return (
        <div className='container_map'>
            {
                character?.map( character => (
                    <ResidentInfo urlCharacter={character} key={character}/>
                  
                ))
            }
            
        </div>
    );
};

export default ResidentsList;