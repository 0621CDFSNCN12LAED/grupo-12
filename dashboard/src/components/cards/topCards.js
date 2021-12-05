import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import SmallCard from './SmallCard';

function TopCards() {
    return (
        <Container>
            <Row>
                <Col>
                    <SmallCard />
                </Col>
                <Col>
                    <SmallCard />
                </Col>
                <Col>
                    <SmallCard />
                </Col>
            </Row>
        </Container>
    );
  }


export default TopCards