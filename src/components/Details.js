import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } =
                        value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/**title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/**end title */}
                            {/**product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>

                                <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
                                    <h4>Package: {title}</h4>
                                    <h6 className="text-title text-uppercase text-muted  mt-3 mb-2">
                                        Packaged By :<span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h6>
                                    <h6 className="text-green">
                                        <strong>
                                            Price: <span> # </span>{price}
                                        </strong>
                                    </h6>
                                    <p className="text-capitalize  mt-3 mb-0">
                                        Our organics:
                                    </p>
                                    <p className="text-muted lead">{info} </p>
                                    {/**buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                back to product
                                           </ButtonContainer>
                                        </Link>
                                        
                                            <ButtonContainer cartColor disabled={inCart?true:false} onClick={() => {
                                                value.addToCart(id);
                                                value.openModel(id);}} >

                                                {inCart ? "inCart" : "add to cart"}
                                            </ButtonContainer>
                                
                                    </div>
                                </div>
                            </div>
                        </div>);
                }}
            </ProductConsumer>
        );
    }
}
