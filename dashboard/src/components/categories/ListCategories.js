import React from 'react'
import {Container, Card,Row, Col} from 'react-bootstrap';
import '../components.css'


class ListCategories extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch("http://localhost:3001/api/categories")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    categories: json.data,
                    DataisLoaded: true
                });
            })
    //PENDING CANTIDAD DE PRODUCTOS
        
        
    }
    render() {
        const { DataisLoaded, categories  } = this.state;
        console.log(categories)
        if (!DataisLoaded) return <div><h1> Cargando categorias... </h1> </div> ;
        return (

            <Container>
                <Row>
                {
                    categories.map(category => {

                        return(
                            <Col key={category.id}>

                                <Card>
                                <Card.Body>
                                    <Card.Title>{category.name}</Card.Title>
                                    <Card.Text>{category.description}</Card.Text>
                                    <Card.Text>Cantidad de productos: {category.productsCount}</Card.Text>
                                  
                                </Card.Body>
                                </Card>
                            </Col>

                        )
                    } )
                }
                </Row>
                

               
            </Container>
        )

}
}

export default ListCategories;