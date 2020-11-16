
// https://material.io/resources/color/
export const color = {
    black: '#222222',
    lightGrey: '#CCCCCC',
    headerBackground: '#F6F6F7',
    grey: '#888888',
    red: '#C90000',
    white: '#FFFFFF'
};

export default {
    primary: {
        main: color.black,

    },
    secondary: {
        main: color.headerBackground,

    },
    text: {
        primary: color.black,
        secondary: color.grey,
    },
    background: {
        default: color.white,
        paper: color.lightGrey,
    },
    alert: {
        main: color.red
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
}