import React from 'react'
import {ListGroup} from 'react-bootstrap';
import '../components.css'


class CategoryRows extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
        this.state = {
            countByCategory: {},
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch("http://localhost:3001/api/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    countByCategory: json.meta.countByCategory,
                    DataisLoaded: true
                });
            })
        
    }
    render() {
        const { DataisLoaded, countByCategory  } = this.state;
        if (!DataisLoaded) return <div><h1> Cargando categorias... </h1> </div> ;

        return (
            Object.keys(countByCategory).map( category => {
                
                //return <p>{countByCategory[category]}</p>
                //return <p>{category}</p>
                return (
                    <ListGroup.Item key={category}>
                        <div className="category_item">
                            <p>{category}</p>
                            <p className="number">{countByCategory[category]}</p>
                        </div>
                    </ListGroup.Item>
                )
                
            
            })
        )

}
}

export default CategoryRows;