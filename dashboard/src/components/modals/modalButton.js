import React from 'react'
import {Button, Modal} from 'react-bootstrap';

import './modal.css'

class ModalButton extends React.Component {

        // Constructor 
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            show:false,
            productInfo: {}
        }
    }
    
    async openModal() {
        this.setState({show:true})
        console.log(this.state.id)
        await fetch("http://localhost:3001/api/products/" + this.state.id)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                productInfo: json.data,
                DataisLoaded: true
            });
        })
        console.log(this.state.productInfo)

    }

    closeModal() {
        this.setState({show:false})
    }
    render () {

        return (
            <>
              <Button variant="primary" onClick={() => this.openModal()}>
                Detalles
              </Button>

                 <Modal
                    show={this.state.show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.state.productInfo.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container modal-container">
                            <div>
                                <img src={this.state.productInfo.image} alt={this.state.productInfo.image} className="modal-image"></img>
                            </div>
                            <div>
                                <div>
                                    <h4>Descripción:</h4>
                                    <p>{this.state.productInfo.description}</p>
                                </div>
                                <div>
                                    <h4>Categoría: <span className="modal-span">{this.state.productInfo.category}</span> </h4>
                                </div>
                                <div>
                                    <h4>Subcategoría: <span className="modal-span">{this.state.productInfo.subcategory}</span> </h4>
                                </div>
                                <div>
                                    <h4>Precio: <span className="modal-span-price">$ {this.state.productInfo.price}</span> </h4>
                                </div>
                                <div>
                                    <h4>Stock: <span className="modal-span">{this.state.productInfo.stock} un.</span> </h4>
                                </div>
                            </div>


                        </div>


                    </Modal.Body>

                    <Modal.Footer>
                    <Button onClick={() => this.closeModal()}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
          );
    }
  
  
    
}
   
export default ModalButton;