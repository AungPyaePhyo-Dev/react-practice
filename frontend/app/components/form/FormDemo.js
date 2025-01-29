import { Component, useState } from "react";

export default function FormDemo(props) {
    const [price,setPrice] = useState(0);
    const [qty,setQty] = useState(0);

    const priceOnChange = (event) => {
        setPrice(event.target.value);
    }


    const qtyOnChange = (event) => {
        setQty(event.target.value);
    }

    return (<div>
        <form>
            <div className={"form-group"}>
                <label>Price</label>
                <input type={"text"} id="price" onChange={priceOnChange} className={"form-control"} value={price} />
            </div>
            <div className={"form-group"}>
                <label>Qty</label>
                <input type={"text"} id="qty" onChange={qtyOnChange} className={"form-control"} value={qty} />
            </div>
            <div className={"form-group"}>
                <label>Total &nbsp; </label>
                {price*qty}
            </div>
        </form>
    </div>)
}