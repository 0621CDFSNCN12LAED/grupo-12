import React from 'react'
import {Container, Card,Row, Col} from 'react-bootstrap';
import '../components.css'


class ListSubcategories extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch("http://localhost:3001/api/subcategories")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    subcategories: json.data,
                    DataisLoaded: true
                });
            })
    //PENDING CANTIDAD DE PRODUCTOS
        
        
    }
    render() {
        const { DataisLoaded, subcategories  } = this.state;
        if (!DataisLoaded) return <div><h1> Cargando subcategorias... </h1> </div> ;
        return (

            <Container>
                <Row>
                {
                    subcategories.map(subcategory => {

                        return(
                            <Col key={subcategory.id}>

                                <Card>
                                <Card.Body>
                                    <Card.Title>{subcategory.name}</Card.Title>
                                    <Card.Text>{subcategory.description}</Card.Text>
                                  
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

export default ListSubcategories;