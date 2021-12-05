import React from 'react'

function Products(props) {
    return (
        <div>
            <h2>Informacion de los productos</h2>
            <p>Titulo {props.title}</p>
            <ul>
                {props.products.map( (product,i) => <li key={product + i}>{product} </li>)}
            </ul>
        </div>
       
    );
  }

  Products.defaultProps = {
    products: ["Mochila1", "Mochila2"]
  }

export default Products