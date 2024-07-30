import React, { Component } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Color, Dimension, ImageName } from '../../enums'
import styles from './style'
import { App_uri } from '../../services/config'

export default class UserDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            propData: this.props.route.params.data.response
        }
    }

    componentDidMount() {
        console.log("props", this.props.route.params.data)

    }

    onBack = () => {
        this.props.navigation.goBack()
    }

    ok = () => {
        this.props.navigation.navigate("WelcomeScreen")
    }

    render() {
        return (
            <SafeAreaView style={{ height: Dimension.height, backgroundColor: "#fff", flex: 1 }}>
                <TouchableOpacity onPress={() => this.onBack()} style={{ alignSelf: "flex-start", paddingHorizontal: 10, marginTop: 10 }}>
                    <Image source={ImageName.BACK_ICON} style={{ height: 40, width: 40, resizeMode: "contain" }} />
                </TouchableOpacity>
                <View style={{ justifyContent: "center", paddingHorizontal: 15, alignItems: "center" }}>
                    <View style={{ height: 200, width: 200, borderRadius: 100, borderWidth: 0.5, borderColor: Color.COLOR.BLUE.LOTUS_BLUE, justifyContent: "center", alignItems: "center" }}>
                        {/* <Text style={{ textAlign: "center", color: "white" }} >Profile image</Text> */}
                        <View style={{ backgroundColor: Color.COLOR.GRAY.LIGHT_GRAY_COLOR, height: 180, width: 180, borderRadius: 90, justifyContent: "center", alignItems: "center" }}>
                            <Image source={this.state.propData.fileName.length > 0 ? { uri: App_uri.IMAGE_URI + this.state.propData.fileName } : ImageName.DUMMY_USER_ICON} style={{ height: 180, width: 180, borderRadius: 90, resizeMode: "contain", justifyContent: "center", alignItems: "center" }} />
                        </View>

                    </View>

                </View>
                <View style={{ paddingHorizontal: 15, }}>
                    <View style={{ paddingVertical: 60 }}>
                        <Text style={styles.bodyTxt} >{this.state.propData.name == "Unknown" ? "We are unable to recognize you, Try again !" : "Hi " + this.state.propData.name + " Your attendance has been marked"}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.ok()} style={{ borderWidth: 1, borderRadius: 15, paddingHorizontal: 20, paddingVertical: 10, borderColor: Color.COLOR.BLUE.LOTUS_BLUE, elevation: 4, backgroundColor: "#fff", marginTop: 50, justifyContent: "center", alignItems: "center",alignSelf:"center" }}>
                    <Text style={styles.markAttendanceTxt}>Ok</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}
