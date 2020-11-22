import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: theme.spacing(1),
        maxWidth: theme.spacing(2),
        ':&onHover': {
            borderColor: theme.palette.secondary.main
        }
    },
}));

const sizes = ['S', 'M', 'L'];

export const Sizes = () => {

    return (
        <>
            {sizes.map((label) =>
                <Typography variant="h6" >{label}</Typography>
            )}
        </>
    );
};


export const SizesButton = () => {
    const classes = useStyles();
    const setSize = (event) => {



    }


    return (
        <>
            {sizes.map((label) =>
                <Button color="primary" onClick={setSize} className={classes.root} variant="outlined" >{label}</Button>
            )}
        </>
    );
};

