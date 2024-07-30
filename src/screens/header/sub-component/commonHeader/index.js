import React, { Component } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { ImageName } from '../../../../enums'
import styles from './style'

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }
    _onToggleDrawer = () => {
        // console.log("propssss====,", JSON.stringify(this.props))
        this.props.navigation.toggleDrawer();
    }
    render() {
        return (
            <View style={styles.headerContainer}>
                <View style={{ flex: 1 }}>
                    <Image source={ImageName.CLIENT_LOGO} style={{ width: 160, height: 80, resizeMode: "center" }} />
                </View>
                <TouchableOpacity
                    style={styles.drawerIconSection}
                    activeOpacity={0.9}
                    onPress={() => this._onToggleDrawer()}>
                    <Image source={ImageName.BURGER_MENU} style={styles.drawerIcon} />
                </TouchableOpacity>
            </View>
        )
    }
}
