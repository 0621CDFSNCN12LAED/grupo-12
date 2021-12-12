import React from 'react'
import {Table} from 'react-bootstrap';
import TableRow from './tableRow';


class userTable extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:3001/api/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    users: json.data,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, users } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Cargando usuarios.... </h1> </div> ;
   
        return (

        <div className="container general-container">
            <h1>Tabla de usuarios </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    users.map( ( user , i) => {
                        return <TableRow  key={i}>
                                <td>{user.id} </td>
                                <td>{user.name} </td>
                                <td>{user.email} </td>
                                </TableRow >
                    })
                }
                </tbody>
            </Table>
        </div>
    );
}
}
   
export default userTable;