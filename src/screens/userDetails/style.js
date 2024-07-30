const { StyleSheet } = require("react-native");
const { Color, FontFamily, FontSize } = require("../../enums");

const styles = StyleSheet.create({
    bodyTxt: {
        textAlign: "center",
        color: Color.COLOR.BLACK.BLACK_PEARL,
        fontFamily: FontFamily.FONTS.POPPINS.MEDIUM,
        fontSize: FontSize.SM
    },
    markAttendanceTxt: {
        color: Color.COLOR.BLUE.LOTUS_BLUE,
        fontFamily: FontFamily.FONTS.POPPINS.MEDIUM,
        fontSize: FontSize.SM
    },
})

export default styles;