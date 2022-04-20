import React from "react";
import { useCart } from "react-use-cart";


const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="row justify-content-around">
      <div className="col-4 g-4">
        <div className="card text-center ">
          <img src={props.img} className="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title ">{props.title}</h5>
            <p className="card-text">$ {props.price}</p>
          </div>
          <div className="card-footer">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => addItem(props.item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
