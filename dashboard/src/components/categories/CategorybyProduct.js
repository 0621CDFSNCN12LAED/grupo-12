import React from 'react'
import {Card, ListGroup, Container} from 'react-bootstrap';
import '../components.css'
import CategoryRows from './CategoryRows';

//El Category Row mapea cada uno de los items dentro de la tabla
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