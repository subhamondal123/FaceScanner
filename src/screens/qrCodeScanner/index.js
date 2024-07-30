import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import styles from './style';
import { Modal } from '../../shared';
import { Dimension } from '../../enums';
import { MiddlewareCheck } from '../../services/middleware';
import { Toaster } from '../../services/common-view-function';
import { ErrorCode } from '../../services/constant';


function QrScanner({
  props,
  navigation,
  isVisible,
  onScanSuccess,
  onCloseCamera
}) {

  // console.log("props....", JSON.stringify(props))


  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('front');
  const [latestScannedData, setLatestScannedData] = useState(null);
  const [isScanning, setIsScanning] = useState(false);



  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => handleCodeScanned(codes),
    // onCodeScanned: (codes) => {
    //   // Update the state with the latest scanned data
    //   setLatestScannedData(codes[0].value);
    //   console.log(JSON.stringify(codes));
    //   onScanSuccess(codes[0].value)

    // },

  });

  const handleCodeScanned = async (codes) => {
    if (!isScanning) {
      setIsScanning(true); // Set scanning flag to true
      // setLatestScannedData(codes[0].value);
      // console.log(JSON.stringify(codes));
      let codeData = codes
      // onScanSuccess(codeData[0].value);
      await ApiCall(codeData);
      // Optional: Implement debounce or throttle here to prevent rapid scanning
      setTimeout(() => {
        setIsScanning(false); // Reset scanning flag after processing
      }, 10000); // Adjust timeout as needed to prevent multiple scans within a short timeframe
    }
  };

  const ApiCall = async (val) => {
    let reqData = {
      'token': val,
    }

    let responseData = await MiddlewareCheck("verifyToken", reqData, this.props)
    console.log("resp token====", JSON.stringify(responseData))
    if (responseData) {
        if (responseData.status == ErrorCode.ERROR.ERROR_CODE.SUCCESS) {
            Toaster.ShortCenterToaster(responseData.message)
            // this.setState({ verified: true })
            onScanSuccess(responseData);
        } else {
            // this.setState({ showHideModal: true })
            onScanSuccess(responseData);
        }
    }
  }

  const onRequestClose = () => {
    onCloseCamera()
  }

  if (device == null) {
    return (
      <View>
        <Text>Device Not Found</Text>
      </View>
    );
  }

  const handleCameraError = (error) => {
    console.error(error);

    // props.navigation.goBack()
  };


  return (
    <Modal
      isVisible={isVisible}
      padding={0}
      transparent={false}
      additionalStyles={{ height: Dimension.height, width: Dimension.width, }}
      // onRequestClose={() => onRequestCloseModal()}
      // onBackdropPress={() => onBackDropPressModal()}
      // onBackButtonPress={() => onBackButtonPressModal()}
      children={
        <View style={styles.container}>
          <Camera
            style={StyleSheet.absoluteFill}
            codeScanner={codeScanner}
            device={device}
            isActive={true}
            onError={handleCameraError}
          />
          <View style={styles.overlay}>
            <View style={styles.overlayTop} />
            <View style={styles.overlayCenter}>
              <View style={styles.overlaySide} />
              <View style={styles.clearView} />
              <View style={styles.overlaySide} />
            </View>
            <View style={styles.overlayBottom} />
          </View>

          {latestScannedData && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>Latest Scanned Code:</Text>
              <Text style={styles.resultText}>{latestScannedData}</Text>
            </View>
          )}

          <View style={{ position: 'absolute', right: 10, top: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
            <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 100, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }} onPress={() => onRequestClose()}>
              <Image source={require('./assets/white_cross.png')} style={{ height: 40, width: 40, resizeMode: 'contain' }} />
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  );
}


QrScanner.defaultProps = {
  onScanSuccess: () => { },
  isVisible: false,
  onCloseCamera: () => { },
};

QrScanner.propTypes = {
  onScanSuccess: PropTypes.func,
  isVisible: PropTypes.bool,
  isVisible: PropTypes.func,
};

export default QrScanner;