import {Dimensions} from 'react-native';

// === Dimensions ===
const {width} = Dimensions.get('screen');

export const FONTS = {
    light: 'Axiforma-Light',
    regular: 'Axiforma-Regular',
    medium: 'Axiforma-Medium',
    semibold: 'Axiforma-SemiBold',
    bold: 'Axiforma-Bold',
}

export const FSIZE = {
    bg2: width / 10,
    bg: width / 13,
    md2: width / 16,
    md: width / 23,
    sm: width / 26,
    sm2: width / 30,
}

export const COLOR = {
    background: "#F1F3FA",
    black: '#000',
    white: 'white',
    link: "#319CFF",
    gray200: "#C4C2D1",
    red: "#FF490F",
    lightRed: "#FFE6E1",
    green: "#21C688",
    lightGreen: "#D8FFF1"
}