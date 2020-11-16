import React, { useState, useEffect } from "react";

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Image from '../components/classic-tee.png';
import data from './data';



const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(6)
    },
    dividerContainer: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    requiredField: {
        color: theme.palette.alert.main,
        paddingRight: theme.spacing(2),
    },
    price: {
        paddingTop: theme.spacing(0.75),
        paddingBottom: theme.spacing(0.75),
    },
    title: {
        flexGrow: 1,
    },
    button: {
        borderWidth: theme.spacing(0.25),
        borderColor: theme.palette.primary.main,
        '&:hover': {
            background: theme.palette.primary.main,
            color: theme.palette.background.default,
        },
    }


}));



const Products = () => {
    const [products, setProducts] = useState([]);
    // const [hasError, setError] = useState(false);
    const classes = useStyles();
    async function fetchData() {
        const res = await fetch("http://localhost:4000/product");
        res
            .json()
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((error) => {
                // setError(error);
            });
    }
    async function addToCart(id, quantity) {


        try {
            const response = await fetch("http://localhost:4000/cart", {
                method: "POST",
                body: JSON.stringify({
                    productId: id,
                    quantity: quantity,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            let data = await response.json();
            alert("Item Added To Cart");
            console.log(data);
        } catch (err) {
            alert("Something Went Wrong");
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log(products);


    return (
        <Container maxwidth="lg" className={classes.root}>
            <Grid justify="center" container spacing={2}>
                <Grid item sm={12} md={7} >
                    <Box display="flex" justifyContent="center" m={1} p={1} >
                        <img maxwidth="450rem" src={Image} alt="classic-tee" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={5}>
                    <Typography variant="h3">Classic Tee</Typography>
                    <Box className={classes.dividerContainer}>
                        <Hidden smDown>
                            <Divider />
                        </Hidden>
                        <Typography className={classes.price} variant="h5">$75.00</Typography>
                        <Hidden smDown>
                            <Divider />
                        </Hidden>
                    </Box>
                    <Typography color="textSecondary" variant="body1">Dolor sit amet, consectetur adipiscing elit. Donec nisl nisl, cursus eu elit vitae, consectetur consectetur nisi. Praesent a mollis diam. Vestibulum iaculis tincidunt odio nec pulvinar.</Typography>
                    <Box className={classes.dividerContainer} display="flex">
                        <Typography color="textSecondary" variant="body1">SIZE</Typography>
                        <Typography variant="body1" className={classes.requiredField}>*</Typography>

                        <Typography variant="h6" >S</Typography>

                    </Box>
                    <Box className={classes.dividerContainer} width="15rem" display="flex">
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Button variant="outlined" >yes</Button>
                        </Grid>
                    </Box>
                    {/* {products.map((product, i) => ( */}
                    <Button
                        variant="outlined"
                        className={classes.button}
                    // onClick={(e) => addToCart(product._id, 1}
                    >
                        ADD TO CART
                        </Button>
                    {/* ))} */}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Products;