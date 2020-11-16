import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
// import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

}));

const Cart = (props) => {
    const classes = useStyles();
    const [carts, setCarts] = useState([]);
    const [payload, setPayloader] = useState({});
    // const [hasError, setError] = useState(false);
    async function fetchCart() {
        const res = await fetch("http://localhost:4000/cart");
        res
            .json()
            .then((res) => {
                console.log(res.data.items);
                setCarts(res.data.items);
                setPayloader(res.data);
            })
            .catch((error) => {
                // setError(error);
            });
    }
    async function increaseQty(id) {
        try {
            const res = await fetch("http://localhost:4000/cart", {
                method: "POST",
                body: JSON.stringify({
                    productId: id,
                    quantity: 1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            console.log(res);
            fetchCart();
            alert("Item Increamented");
        } catch (err) {
            console.log(err);
        }
    }
    async function emptyCart() {
        try {
            const res = await fetch("http://localhost:4000/cart/empty-cart", {
                method: "DELETE",
            });
            await res.json();
            fetchCart();
            props.history.push("/");
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchCart();
    }, []);
    return (
        <main className={classes.root}>

            <section>


                <div className="row shop-listing">
                    <table className="table shop-table">
                        <Typography color="primary"> MY CART</Typography>

                        {carts.map((item, i) => (
                            <tr>
                                {/* <Typography>{item.productId.name}</Typography>
                                <Typography>{item.productId.quantity}</Typography>
                                <Typography>{item.productId.price}</Typography>
                                <Typography>{item.productId.size}</Typography> */}
                                <td>
                                    <Button
                                        onClick={(e) => increaseQty(item.productId._id)}
                                        className="btn btn-primary btn-sm"
                                    >
                                        +
                          </Button>
                                    {item.quantity}
                                    <button className="btn btn-primary btn-sm">-</button>
                                </td>
                                <td className="text-right">
                                    <h5>{item.total}</h5>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Cart;