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
            orderInfo: {},
            userInfo: {},
            productsInfo: []
        }
    }
    
    async openModal() {
        this.setState({show:true})
        console.log(this.state.id)
        await fetch("http://localhost:3001/api/orders/" + this.state.id)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                orderInfo: json.data,
                DataisLoaded: true,
                userInfo: json.data.user,
                productsInfo: json.data.products
            });
        })
        console.log(this.state.orderInfo)
        console.log(this.state.userInfo)
        console.log(this.state.productsInfo)



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
                    onHide={() => this.closeModal()}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.state.orderInfo.order_number}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <h3>{this.state.userInfo.name}</h3>
                        </div>
                        <div>
                            <h5>Productos comprados:</h5>
                            {this.state.productsInfo.map((product) => {
                                return(
                                    <p key={this.state.id + "-" + product.id}>{product.name} x {product.quantity} un.</p>
                                )
                            })}

                        </div>
                        <div>Monto total: $ {this.state.orderInfo.total_amount}</div>


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


/**
 * 
 *                            {this.state.orderInfo.products.map((product) => {
                                return (
                                    <div>
                                        <p>{product.name}</p>
                                        <p>{product.quantity}</p>
                                    </div>
                                )
                            })}
 */