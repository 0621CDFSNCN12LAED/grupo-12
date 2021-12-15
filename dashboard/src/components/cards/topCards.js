import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import SmallCard from './SmallCard';

class TopCards extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
        this.state = {
            productQuantity: "",
            ordersQuantity: "",
            categoryQuantity: "",
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch("http://localhost:3001/api/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    productQuantity: json.meta.count,
                });
            })
        fetch("http://localhost:3001/api/orders")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    ordersQuantity: json.meta.count,
                });
            })
        fetch("http://localhost:3001/api/categories")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    categoryQuantity: json.meta.count,
                    DataisLoaded: true
                });
            })
        
    }
    render() {
        const { DataisLoaded, productQuantity, ordersQuantity,categoryQuantity  } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Cargando tablero... </h1> </div> ;
   
        return (
            <Container>
                <Row>
                    <Col>
                        <SmallCard title={productQuantity} detail="Cantidad de productos" borderLeft="border-left-blue"/>
                    </Col>
                    <Col>
                        <SmallCard title={ordersQuantity} detail="Cantidad de ordenes" borderLeft="border-left-green"/>
                    </Col>
                    <Col>
                        <SmallCard title={categoryQuantity} detail="Categorías" borderLeft="border-left-yellow"/>
                    </Col>
                </Row>
            </Container>
    );
}
}
   
export default TopCards;