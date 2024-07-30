import React, { Component } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import styles from './Style'
import { Color, Dimension } from '../../enums'

export default class WelcomeScreen extends Component {
    onMarkAttendance = () => {
        this.props.navigation.navigate("QrScanner")
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 15 }}>
                    <View style={{ paddingVertical: 30 }}>
                        <Text style={styles.welcomeTxt}>Welcome</Text>
                    </View>
                    <View style={{ paddingHorizontal: 50, height: Dimension.height / 2, justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.bodyTxt}>Please put your face inside the circle and wait to mark your attendance</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.onMarkAttendance()} style={{ borderWidth: 1, borderRadius: 15, paddingHorizontal: 20, paddingVertical: 10, borderColor: Color.COLOR.BLUE.LOTUS_BLUE, elevation: 4, backgroundColor: "#fff", marginTop: 20 }}>
                        <Text style={styles.markAttendanceTxt}>Mark Attendance</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
