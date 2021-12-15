import React from 'react'
import {Table} from 'react-bootstrap';
import TableRow from './tableRow';
import OrderModalButton from '../modals/orderModalButton';


class OrderTable extends React.Component {
    
   
    // Constructor 
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://localhost:3001/api/orders")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    orders: json.data,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, orders } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Cargando ordenes.... </h1> </div> ;
   
        return (

        <div className="container general-container">
            <h1>Tabla de Ordenes </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Nro Orden</th>
                    <th>Fecha</th>
                    <th>Monto total</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map( ( order , i) => {
                        return <TableRow  key={i}>
                                <td>{order.order_number} </td>
                                <td>{order.purchase_date} </td>
                                <td>$ {order.total_amount} </td>
                                <td> <OrderModalButton id={order.id} /> </td>
                                </TableRow >
                    })
                }
                </tbody>
            </Table>
            
        </div>
    );
}
}
   
export default OrderTable;