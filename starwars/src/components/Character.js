import React from 'react';
import CharacterCard from './CharacterCard.js';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


const Character = (props) => {
    return (
    <>
        <WrapperDiv>
            {props.charAttrs.map((character, i) => {
                return(<CharacterCard 
                    name={character.name} 
                    height={character.height} 
                    gender={character.gender} 
                    films={character.films} 
                    mass={character.mass} 
                    hair_color={character.hair_color}
                    eye_color={character.eye_color}
                    skin_color={character.skin_color}
                      />)
            })}
        </WrapperDiv>
     </>
    )
}

export default Character;


