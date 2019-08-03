import React from 'react'
import { Card } from 'semantic-ui-react'

const CharacterCard = (props) => {
    return (
        <>
            <Card>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>{props.gender}</Card.Meta>
                <Card.Description>Hair Color: {props.hair_color}</Card.Description>
                <Card.Description>Height: {props.height}</Card.Description>
                <Card.Description>Mass: {props.mass}</Card.Description>
            </Card.Content>
            </Card>
      </>
    )
  }

export default CharacterCard;