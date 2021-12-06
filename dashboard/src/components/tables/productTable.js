import React from 'react'
import {Table} from 'react-bootstrap';
import TableRow from './tableRow';


class ProductTable extends React.Component {
   
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
"http://localhost:3001/api/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.data,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (

        <div className="container general-container">
            <h1>Tabla de productos </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map( ( item , i) => {
                        return <TableRow { ...item} key={i}/>
                    })
                }
                </tbody>
            </Table>
        </div>
    );
}
}
   
export default ProductTable;