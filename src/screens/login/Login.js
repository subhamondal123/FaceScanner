import React, { Component } from 'react'
import { ActivityIndicator, Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AlertMessage, Color, Dimension, FontFamily, FontSize, ImageName } from '../../enums'
import Header from '../header/Header'
import { TextInputBox } from '../../shared'
import { CommonActions } from '@react-navigation/native'
import { DataValidator } from '../../validators'
import styles from './Style'
import { Permissions, StorageDataModification, Toaster } from '../../services/common-view-function'
import { MiddlewareCheck } from '../../services/middleware'
import { ErrorCode } from '../../services/constant'
import { modLoginData } from './function'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: "",
            password: "",
            pageLoader: false
        }
    }

    componentDidMount = async () => {
        await Permissions.getCameraPermission();
    }


    _onChangeUserId = (value) => {
        let newText = '';
        newText = DataValidator.inputEntryValidate(value, "alphanumeric");
        this.setState({
            userId: newText
        })

        if (this.state.userIdError == true) {
            this.setState({
                userIdError: false
            })
        }
    }

    _onChangePassword = (value) => {
        this.setState({
            password: value
        })
    }

    onLogin = async () => {
        this.state.userId = this.state.userId.replace(/\s+/g, '');
        let errorCount = 0;
        let msg = "";
        let data = {
            userId: this.state.userId,
            password: this.state.password
        }

        if (data.userId == null || data.userId == undefined || data.userId.length == 0) {
            msg = AlertMessage.MESSAGE.EMAIL.EMAIL_EMPTY;
            Toaster.ShortCenterToaster("Please enter User Id !")
            errorCount++;
        }
        // else if (emailModValidator(data.userId) == false) {
        //     msg = AlertMessage.MESSAGE.EMAIL_PASSWORD.INCORRECT;
        //     errorCount++;
        // }

        else if (data.password == null || data.password == undefined || data.password.length == 0) {
            Toaster.ShortCenterToaster(AlertMessage.MESSAGE.PASSWORD.PASSWORD_EMPTY)

            msg = AlertMessage.MESSAGE.PASSWORD.PASSWORD_EMPTY;
            errorCount++;
        }
        if (errorCount === 0) {
            let reqData = {
                "email": this.state.userId,
                "password": this.state.password,

            }
            this.setState({ pageLoader: true })
            let responseData = await MiddlewareCheck("userLogin", reqData, this.props);
            console.log("resp login----", JSON.stringify(responseData))
            if (responseData) {
                if (responseData.status == ErrorCode.ERROR.ERROR_CODE.SUCCESS) {
                    let modifyLoginData = modLoginData(responseData);
                    await StorageDataModification.userCredential(modifyLoginData, "store");
                    this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'DrawerNav' }] }));
                    Toaster.ShortCenterToaster(responseData.message)
                }
            }

            this.setState({ pageLoader: false })
        }
    }
    render() {
        return (
            <SafeAreaView>
                <ImageBackground style={{ height: Dimension.height }} source={ImageName.BACKGROUND_IMAGE} >
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardStyle}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image source={ImageName.CLIENT_LOGO} style={{ height: 250, width: Dimension.width - 100, resizeMode: "contain" }} />
                        </View>

                        <View style={{ position: "absolute", bottom: 0, borderWidth: 1, borderColor: "#d4a04e", flex: 1, width: Dimension.width, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingBottom: 20, paddingHorizontal: 20 }}>
                            <View style={{ justifyContent: "center", paddingVertical: 20 }}>
                                <Text style={{ color: Color.COLOR.WHITE.PURE_WHITE, fontSize: 24, fontFamily: FontFamily.FONTS.POPPINS.MEDIUM, textAlign: "center" }}>Login</Text>
                            </View>
                            <View style={{ marginTop: 20, marginBottom: 20 }}>
                                <TextInputBox
                                    placeholder={"User Id"}
                                    isLeftIcon={true}
                                    fontSize={FontSize.SM}
                                    leftIcon={ImageName.PROFILE_ICON}
                                    leftIconStyle={{ height: 25, width: 25 }}
                                    height={42}
                                    borderRadius={22}
                                    keyboardType={"default"}
                                    returnKeyType={"next"}

                                    inactiveTextColor={"#fff"}
                                    activeTextColor={"#fff"}
                                    refName={ref => this.firstTextInput = ref}
                                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                    value={this.state.userId}
                                    onChangeText={(value) => this._onChangeUserId(value)}
                                    // onPressRightIcon={() => onPressSearchIcon()}
                                    additionalBoxStyle={{ borderBottomColor: "#8e8e8e", borderBottomWidth: 0.5, borderRadius: 0 }}
                                />
                            </View>
                            <View style={{ marginTop: 30, marginBottom: 20 }}>
                                <TextInputBox
                                    placeholder={"Password"}
                                    isLeftIcon={true}
                                    fontSize={FontSize.SM}
                                    leftIcon={ImageName.PASSWORD_ICON}
                                    leftIconStyle={{ height: 24, width: 24 }}
                                    height={42}
                                    inactiveTextColor={"#fff"}
                                    activeTextColor={"#fff"}
                                    borderRadius={22}
                                    secureTextEntry={true}
                                    refName={ref => this.secondTextInput = ref}
                                    value={this.state.password}
                                    onChangeText={(value) => this._onChangePassword(value)}
                                    // onPressRightIcon={() => onPressSearchIcon()}
                                    additionalBoxStyle={{ borderBottomColor: "#8e8e8e", borderBottomWidth: 0.5, borderRadius: 0 }}
                                />
                            </View>
                            <View style={{ marginTop: 60, marginHorizontal: 35 }}>
                                {this.state.pageLoader ? <ActivityIndicator /> :
                                    <TouchableOpacity style={{ backgroundColor: "#d8b51f", paddingVertical: 5 }} onPress={() => this.onLogin()}>
                                        <Text style={{ color: Color.COLOR.BLACK.PURE_BLACK, fontSize: 20, fontFamily: FontFamily.FONTS.POPPINS.MEDIUM, textAlign: "center" }}>Login</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>

            </SafeAreaView>
        )
    }
}
