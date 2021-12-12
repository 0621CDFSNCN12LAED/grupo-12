import React from 'react'
import {Container} from 'react-bootstrap';
import CategorybyProduct from './CategorybyProduct';
import ListCategories from './ListCategories';
import ListSubcategories from './ListSubcategories';
import '../../App.css'


class CategoriesSection extends React.Component {
   
    render() {
        return (
            <Container className="general-container" >
                <div className="general-container">
                    <h1> Panel de categorías</h1>
                    <CategorybyProduct />
                </div>
                <div className="general-container">
                    <h1> Listado de categorías</h1>
                    <ListCategories />
                </div>
                <div className="general-container">
                    <h1> Listado de subcategorías</h1>
                    <ListSubcategories />
                </div>
               

                
            </Container>
    );
}
}
   
export default CategoriesSection;