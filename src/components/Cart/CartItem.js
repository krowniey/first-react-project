import React from 'react'

export default function CartItem({ item, value }) {

    const { id, title, img, price, total, count } = item;
    const { incrementation, decrementation, removeItem } = value

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 col-lg-2 mx-auto">
                <img src={img} style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">

                <span className="d-lg-none">price:</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex jusify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrementation(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => incrementation(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">

            <div className="cart-icon" onClick ={()=>removeItem(id)}>
                <i className= "fa fa-trash"></i>
            </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
<strong>item total : # {total}</strong>
            </div>
        </div>
    );

}
