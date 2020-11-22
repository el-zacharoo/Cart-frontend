
import { color } from './palette';

export default {

    // MuiAppBar: {
    //     root: {
    //         height: 20
    //     }
    // },
    MuiLink: {
        root: {
            fontWeight: 700,
        },
    },
    MuiPaper: {
        root: {
            backgroundColor: color.white,
        },
        elevation1: {
            // boxShadow: 0
            boxShadow: `-8px 8px 6px -6px ${color.lightGrey}`
        },
    },
    MuiCardActionArea: {
        root: {
            height: '100%'
        },
    },

    MuiButton: {
        root: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        contained: {
            boxShadow: 'none',
        },
        outlinedPrimary: {
            borderWidth: 1,


        },
        outlined: {

        }
    },

    MuiToolbar: {
        dense: {
            height: '1rem'
        },
    },


    MuiTypography: {
        gutterBottom: {
            marginBottom: '1rem',
        },
    },
}