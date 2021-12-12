import React from 'react'
import {Card, ListGroup, Container} from 'react-bootstrap';
import '../components.css'
import CategoryRows from './CategoryRows';

class CategorybyProduct extends React.Component {
   
    render() {
        return (
            <Container>
                <Card style={{ width: '18rem' }}>
                <Card.Header>Productos por categoría</Card.Header>
                <ListGroup variant="flush">
                    <CategoryRows/>
                </ListGroup>
                </Card>
            </Container>
           
    );
}
}
   
export default CategorybyProduct;