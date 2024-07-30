import { Color, FontFamily, FontSize } from "../../enums";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    welcomeTxt: {
        color: Color.COLOR.BLUE.LOTUS_BLUE,
        fontFamily: FontFamily.FONTS.POPPINS.MEDIUM,
        fontSize: FontSize.XL
    },
    markAttendanceTxt: {
        color: Color.COLOR.BLUE.LOTUS_BLUE,
        fontFamily: FontFamily.FONTS.POPPINS.MEDIUM,
        fontSize: FontSize.SM
    },
    bodyTxt:{
        color: Color.COLOR.BLUE.LOTUS_BLUE,
        fontFamily: FontFamily.FONTS.POPPINS.MEDIUM,
        fontSize: FontSize.XS,
        textAlign:"center"
    }
})

export default styles;