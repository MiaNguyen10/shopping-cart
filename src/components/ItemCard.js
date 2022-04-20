import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useCart } from 'react-use-cart';

const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100">
          <img src={props.img} class="card-img-top" alt={props.title} />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">$ {props.price}</p>
          </div>
          <div class="card-footer">
            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                class="btn btn-primary"
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
