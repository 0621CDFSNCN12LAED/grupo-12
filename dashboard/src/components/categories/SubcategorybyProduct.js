import React from 'react'
import {Card, ListGroup, Container} from 'react-bootstrap';
import '../components.css'
import SubcategoryRows from './SubcategoryRows';

class SubcategorybyProduct extends React.Component {
   
    render() {
        return (
            <Container>
                <Card style={{ width: '18rem' }}>
                <Card.Header>Productos por categoría</Card.Header>
                <ListGroup variant="flush">
                    <SubcategoryRows/>
                </ListGroup>
                </Card>
            </Container>
           
    );
}
}
   
export default SubcategorybyProduct;