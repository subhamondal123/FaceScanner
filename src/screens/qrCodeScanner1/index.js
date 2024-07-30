import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import styles from './style';
import { CustomCamera, Modal } from '../../shared';
import { Color, Dimension, FontFamily, FontSize, ImageName } from '../../enums';
import { MiddlewareCheck, MiddlewareFileCheck } from '../../services/middleware';
import { Permissions, Toaster } from '../../services/common-view-function';
import { ErrorCode } from '../../services/constant';
import Svg, { Rect, Circle, Defs, Mask } from 'react-native-svg';
import { changeFormatData } from './function';

const QrScanner = ({ navigation, route, props }) => {
  const device = useCameraDevice('front');
  const [isLoading, setIsLoading] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [showHideModal, setShowHideModal] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const cameraRef = useRef(null);


  useEffect(async () => {
    if (await Permissions.getCameraPermission()) {
      setIsLoading(false)
    }
  }, [])

  const handleCameraError = (error) => {
    console.error(error);

    // navigation.goBack()
  };

  const handleCodeScanned = async (codes) => {
    if (!isScanning) {
      setIsScanning(true); // Set scanning flag to true
      let codeData = codes
      // await ApiCall(codeData[0].value);
      // Optional: Implement debounce or throttle here to prevent rapid scanning
      setTimeout(() => {
        setIsScanning(false); // Reset scanning flag after processing
      }, 5000); // Adjust timeout as needed to prevent multiple scans within a short timeframe
    }
  };

  const ApiCall = async (val) => {
    let reqData = {
      'token': val,
    }
    let responseData = await MiddlewareCheck("verifyToken", reqData, this.props)
    // console.log("resp token====", JSON.stringify(responseData))
    if (responseData) {
      if (responseData.status == ErrorCode.ERROR.ERROR_CODE.SUCCESS) {
        Toaster.ShortCenterToaster(responseData.message)
        // const { setResults } = route.params;
        // setResults(val)
        // navigation.goBack()
      } else {
        setShowHideModal(true)
      }
    }

  }

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => handleCodeScanned(codes),

  });

  const modalSec = () => {
    const closeModal = () => {
      setShowHideModal(false)
    }
    const onTryAgain = () => {
      setShowHideModal(false)
    }
    return (
      <>
        {showHideModal ?
          <Modal
            isVisible={showHideModal}
            padding={0}
            children={
              <View style={styles.modalview}>
                <React.Fragment>
                  <View style={styles.modalHeaderSec}>
                    <TouchableOpacity style={styles.crossImgSec} onPress={() => closeModal()}>
                      <Image source={ImageName.WHITE_CROSS} style={styles.redCrossImg} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: Color.COLOR.RED.AMARANTH, fontFamily: FontFamily.FONTS.POPPINS.MEDIUM, fontSize: FontSize.XXXL }}>Error</Text>
                    <Text style={{ color: Color.COLOR.BLACK.PURE_BLACK, fontFamily: FontFamily.FONTS.POPPINS.MEDIUM, fontSize: FontSize.SM, top: -10 }}>Oops! Something went worng</Text>
                    <TouchableOpacity onPress={() => onTryAgain()} style={{ backgroundColor: Color.COLOR.RED.AMARANTH, borderRadius: 10, justifyContent: "center", alignItems: "center", paddingHorizontal: 25, paddingVertical: 5, marginTop: 10 }}>
                      <Text style={{ color: Color.COLOR.WHITE.PURE_WHITE, fontFamily: FontFamily.FONTS.POPPINS.MEDIUM, fontSize: FontSize.MD }}>Try Again</Text>
                    </TouchableOpacity>
                  </View>

                </React.Fragment>
              </View>
            }
          />
          : null}
      </>
    )
  }

  const createFormData = (photoData) => {
    console.log("phototdatata===", photoData);
    let name = "";
    if (photoData.path) {
      let tempArrPath = photoData.path.split("/");
      if (tempArrPath.length > 0) {
        name = tempArrPath[tempArrPath.length - 1];
      }
    }
    const data = new FormData();

    // Append the image file
    data.append('file', {
      name: name, // or any other extension you expect
      type: 'image/jpeg', // MIME type
      // uri: Platform.OS === 'android' ? photoData.path : photoData.path.replace('file://', ''),
      uri: "file://" + photoData.path,
      height: photoData.height,
      width: photoData.width,
      isMirrored: photoData.isMirrored.toString(),
      isRawPhoto: photoData.isRawPhoto.toString(),
      orientation: photoData.orientation,
      // platform:photoData.platform
    });
    console.log("data--", JSON.stringify(data))

    return data;
  };

  const onCapture = async () => {
    setButtonLoader(true)
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePhoto({
          qualityPrioritization: 'balanced', // Set the desired quality
        });
        console.log('Photo taken:', photo);
        console.log('Photo format  taken:', changeFormatData(photo));
        if (photo) {
          let responseData = await MiddlewareFileCheck("recognition", changeFormatData(photo), props)
          console.log("resppp datta---", JSON.stringify(responseData))
          if (responseData) {
            if (responseData.success) {
              navigation.navigate("UserDetails", { data: responseData })
            }
          }
        } else {
          Toaster.ShortCenterToaster("Something went wrong !")
        }
        // Handle photo saving or processing here
      }
    } catch (error) {
      console.error('Failed to capture photo:', error);
    }
    // navigation.navigate("UserDetails")
    setButtonLoader(false)
  }

  return (
    <View style={styles.container}>
      {isLoading ?
        <View>
          <ActivityIndicator />
        </View>
        :
        <>
          {/* <CustomCamera isVisible={true} onCloseCamera={(value) => this.setState({ cameraVisible: value })} picData={(value) => this.onSelectPic(value)} /> */}
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
            // codeScanner={codeScanner}
            onError={handleCameraError}
          />
          <Svg style={StyleSheet.absoluteFill}>
            <Defs>
              <Mask id="mask" x="0" y="0" width="100%" height="100%">
                {/* This will create the transparent circle */}
                <Rect x="0" y="0" width="100%" height="100%" fill="white" />
                <Circle cx="50%" cy="50%" r="170" fill="black" />
              </Mask>
            </Defs>
            {/* Overlay with transparency */}
            <Rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="rgba(0, 0, 0, 0.7)"
              mask="url(#mask)"
            />
          </Svg>
          <View style={{ position: "absolute", bottom: 10, justifyContent: "center", alignItems: "center", width: "100%" }}>
            {buttonLoader ? <ActivityIndicator /> :
              <TouchableOpacity onPress={() => onCapture()} style={{ backgroundColor: "white", height: 70, width: 70, borderRadius: 35, justifyContent: "center", alignItems: "center", marginBottom: 10 }}>
                <Image source={ImageName.CAMERA_ICON} style={{ height: 50, width: 50, resizeMode: "contain" }} />
              </TouchableOpacity>
            }
          </View>
        </>}

    </View>
  )
}

export default QrScanner;