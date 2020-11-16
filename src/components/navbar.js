import React from "react"
// import { Link } from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from './cart';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.secondary.main,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    menuButton: {
        color: theme.palette.text.secondary
    },
    title: {
        flexGrow: 1,
    },
    dropdown: {
        position: 'absolute',
        top: theme.spacing(8),
        width: theme.spacing(25),
        right: 40,

        zIndex: 100,
        border: '1px solid',
        borderColor: theme.palette.background.paper,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <AppBar className={classes.root} elevation="0px" position="static">
            <Toolbar variant="dense" >
                <Box className={classes.title} />
                <ClickAwayListener
                    background="backgroundMain"
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchStart"
                    onClickAway={handleClickAway}
                >

                    <div className={classes.root}>
                        <Hidden smDown>
                            <Button size="small" className={classes.menuButton} onClick={handleClick}>
                                MY CART
                            </Button>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton size="small" onClick={handleClick} >
                                <ShoppingCartIcon />
                            </IconButton>
                        </Hidden>
                        {open ? (
                            <div className={classes.dropdown}>
                                <Cart />
                            </div>
                        ) : null}
                    </div>
                </ClickAwayListener>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;