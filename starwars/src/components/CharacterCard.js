import React from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components';

const CardWrapper = styled.div`
    margin: 30px;
`;

const Paragraph = styled.p`
    color: dodgerblue;
`;

const CharacterCard = (props) => {
    return (
        <>
            <CardWrapper>
                <Card>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>{props.gender}</Card.Meta>
                    <Paragraph>Hair Color: {props.hair_color}</Paragraph>
                    <Card.Description>Height: {props.height}</Card.Description>
                    <Card.Description>Mass: {props.mass}</Card.Description>
                </Card.Content>
                </Card>
            </CardWrapper>
      </>
    )
  }

export default CharacterCard;