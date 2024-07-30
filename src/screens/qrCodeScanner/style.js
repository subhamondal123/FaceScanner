import { Dimension } from "../../enums";

const { StyleSheet } = require("react-native");

const scannerWidth = Dimension.width * 0.8;
const scannerHeight = scannerWidth;


const overlayColor = 'rgba(0, 0, 0, 0.5)';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    resultContainer: {
        position: 'absolute',
        bottom: 40, // Adjust the position to provide space between the camera view and the result container
        left: 20,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
        borderRadius: 5,
    },
    resultTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
    },
    resultText: {
        fontSize: 14,
        color: 'white',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayTop: {
        flex: 1,
        width: '100%',
        backgroundColor: overlayColor,
      },
      overlayCenter: {
        flexDirection: 'row',
      },
      overlaySide: {
        flex: 1,
        backgroundColor: overlayColor,
      },
      clearView: {
        width: scannerWidth,
        height: scannerHeight,
        borderWidth: 1,
        borderColor: '#fff',
        // borderRadius:10
      },
      overlayBottom: {
        flex: 1,
        width: '100%',
        backgroundColor: overlayColor,
      },

});


export default styles
