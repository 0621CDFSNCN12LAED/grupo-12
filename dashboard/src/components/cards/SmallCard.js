import React from 'react'
import {Card} from 'react-bootstrap';
import '../components.css'

function SmallCard(props) {
    return (
        <Card className={props.borderLeft}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.detail}
                </Card.Text>
            </Card.Body>
        </Card>
    );
  }
// En el Button podemos hacerlo como si fuera un child


export default SmallCard

