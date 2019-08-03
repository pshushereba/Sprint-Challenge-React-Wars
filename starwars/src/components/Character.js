import React from 'react';
import CharacterCard from './CharacterCard.js';

const Character = (props) => {
    return (
    <>
        <div>
            {props.charAttrs.map((character) => {
                return(<CharacterCard 
                    name={character.name} 
                    height={character.height} 
                    gender={character.gender} 
                    films={character.films} 
                    mass={character.mass} 
                    hair_color={character.hair_color}  />)
            })}
        </div>
     </>
    )
}

export default Character;


