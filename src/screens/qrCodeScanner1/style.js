import { Color, Dimension } from "../../enums";

const { StyleSheet } = require("react-native");

const scannerWidth = Dimension.width * 0.6;
const scannerHeight = scannerWidth;


const overlayColor = 'rgba(0, 0, 0, 0.5)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

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
    borderRadius: 5
  },
  overlayBottom: {
    flex: 1,
    width: '100%',
    backgroundColor: overlayColor,
  },



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
    paddingHorizontal: 15,
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
  //---------------
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  maskedView: {
    flex: 1,
    flexDirection: 'column',
  },
  maskContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
   circleMask: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});


export default styles
