import React, { useState } from "react";
import { useCart } from "react-use-cart";
import "./style.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";

const Cart = () => {
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isEmpty) return <p className="text-center">Your cart is empty</p>;

  return (
    <div className=" p-4 bd-highlight">
      <h1 className="text-center">Cart</h1>

      <h2>Total items: ({totalItems})</h2>
      <table className="table">
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ height: "6rem" }}
                />
              </td>
              <td>{item.title}</td>

              <td>${item.price}</td>

              <td> Quantity: {item.quantity}</td>
              <td>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  className="btn btn-primary btn-update"
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="btn btn-primary btn-update"
                >
                  +
                </button>
                <button
                  className="btn btn-primary btn-update"
                  onClick={() => removeItem(item.id)}
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total price: $ {cartTotal} </h2>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={() => emptyCart()} color="error">
            Clear Cart
          </Button>
          <Button
            variant="contained"
            onClick={handleClickOpen}
          >
            Check out
          </Button>
        </Stack>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Alert"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Order successfully. Total bill: ${cartTotal}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default Cart;
