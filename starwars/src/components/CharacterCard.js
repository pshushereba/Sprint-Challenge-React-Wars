import React from 'react'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components';

const CardWrapper = styled.div`
    margin: 30px;
    align-items: stretch;
`;

const Paragraph = styled.p`
    color: dodgerblue;
`;

const CustomHeader = styled.h1`
    font-size: 2rem;
    color: #e3e3e3;
`;

const CharacterCard = (props) => {
    return (
        <>
            <CardWrapper>
                <Card>
                <Card.Content>
                    <CustomHeader>{props.name}</CustomHeader>
                    <Card.Meta>{props.gender}</Card.Meta>
                    <Card.Description>Hair Color: {props.hair_color}</Card.Description>
                    <Card.Description>Eye Color: {props.eye_color}</Card.Description>
                    <Card.Description>Skin Color: {props.skin_color}</Card.Description>
                    <Paragraph>Height: {props.height}</Paragraph>
                    <Paragraph>Mass: {props.mass}</Paragraph>
                </Card.Content>
                </Card>
            </CardWrapper>
      </>
    )
  }

export default CharacterCard;