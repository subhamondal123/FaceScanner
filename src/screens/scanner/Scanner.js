import React, { Component, version } from 'react'
import { ActivityIndicator, Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Color, Dimension, FontFamily, FontSize, ImageName } from '../../enums'
import Header from '../header/Header'
import QrScanner from '../qrCodeScanner'
import { MiddlewareCheck } from '../../services/middleware'
import { ErrorCode } from '../../services/constant'
import { Permissions, Toaster } from '../../services/common-view-function'
import { Modal } from '../../shared'
import styles from './Style'
// import { QrScanner } from '../../shared'

export default class Scanner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showHideQr: false,
            pageLoader: false,
            showHideModal: false,
            verified: false
        }
    }

    componentDidMount = async () => {
        await Permissions.getCameraPermission();
        // this._unsubscribe = this.props.navigation.addListener(
        //     'focus', async () => {
        //         this.setState({ verified: false })
        //     })
    }

    qr = async (type) => {
        this.setState({ verified: false })
        this.props.navigation.navigate("QrScanner", { setResults: this.setResults })
    }

    resetData = () => {
        this.setState({ verified: false })
    }

    setResults = async (val) => {
        console.log("val ----", val)
        this.setState({ pageLoader: true, verified: true })

        this.setState({ pageLoader: false })
        // await this.setState({ showHideQr: false })
    }

    closeModal = () => {
        this.setState({ showHideModal: false })
    }

    onTryAgain = () => {
        this.setState({ showHideModal: false, showHideQr: true })
    }

    modalSec = () => {
        return (
            <>
                {this.state.showHideModal ?
                    <Modal
                        isVisible={this.state.showHideModal}
                        padding={0}
                        children={
                            <View style={styles.modalview}>
                                <React.Fragment>
                                    <View style={styles.modalHeaderSec}>
                                        <TouchableOpacity style={styles.crossImgSec} onPress={() => this.closeModal()}>
                                            <Image source={ImageName.WHITE_CROSS} style={styles.redCrossImg} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: Color.COLOR.RED.AMARANTH, fontFamily: FontFamily.FONTS.POPPINS.MEDIUM, fontSize: FontSize.XXXL }}>Error</Text>
                                        <Text style={{ color: Color.COLOR.BLACK.PURE_BLACK, fontFamily: FontFamily.FONTS.POPPINS.MEDIUM, fontSize: FontSize.SM, top: -10 }}>Oops! Something went worng</Text>
                                        <TouchableOpacity onPress={() => this.onTryAgain()} style={{ backgroundColor: Color.COLOR.RED.AMARANTH, borderRadius: 10, justifyContent: "center", alignItems: "center", paddingHorizontal: 25, paddingVertical: 5, marginTop: 10 }}>
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

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                {this.state.showHideQr ?
                    <QrScanner
                        {...this.props}
                        isVisible={this.state.showHideQr}
                        onCloseCamera={() => this.qr(false)}
                        onScanSuccess={(value) => this.setResults(value)} />
                    : <>
                        {this.state.pageLoader ? null :
                            <ImageBackground style={{ height: Dimension.height }} source={ImageName.BACKGROUND_IMAGE} >
                                <Header {...this.props} />
                                <View style={{ flex: 1, alignItems: "center", marginTop: 140 }}>
                                    <View>
                                        <Text style={{ color: Color.COLOR.WHITE.PURE_WHITE, fontFamily: FontFamily.FONTS.POPPINS.MEDIUM, fontSize: 22 }}>Scan</Text>
                                    </View>
                                    <View style={{ marginTop: 50 }}>
                                        <Image source={this.state.verified ? ImageName.VERIFIED_ICON : ImageName.SCANNER} style={{ height: 200, width: 200, resizeMode: "contain" }} />
                                    </View>
                                    <View style={{ marginTop: 50 }}>
                                        <TouchableOpacity style={{ backgroundColor: "#d8b51f", paddingHorizontal: 25, paddingVertical: 10, borderRadius: 30 }} onPress={() => this.qr(true)}>
                                            <Text style={{ color: Color.COLOR.BLACK.PURE_BLACK, fontFamily: FontFamily.FONTS.POPPINS.MEDIUM, fontSize: 18 }}>{this.state.verified ? "Scan Another QR" : "Scan QR Code"}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                        }
                    </>
                }

            </SafeAreaView>
        )
    }
    // }
}
