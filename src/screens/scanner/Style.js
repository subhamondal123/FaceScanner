// Modal Section Start

import { Color, Dimension } from "../../enums";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    modalview: {
        backgroundColor: Color.COLOR.WHITE.PURE_WHITE,
        paddingBottom: 30,
        borderRadius: 20,
        maxHeight: Dimension.height,
        right: 0,
        left: 0,
        marginHorizontal: "10%"
    },
    modalHeaderSec: {
        // backgroundColor: Color.COLOR.RED.AMARANTH,
        paddingTop: 10,
        paddingHorizontal:15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10

    },
    crossImgSec: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: Color.COLOR.BLACK.PURE_BLACK,
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    redCrossImg: {
        height: 28,
        width: 28,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})

export default styles;