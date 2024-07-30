import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './Style'
import { Common } from './sub-component'



export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }
    getHeaderData = () => {
        let headerRespObj = {
            commonHeaderVisible: false,

        }

        switch (this.props.route.name) {
            case "Scanner":
                headerRespObj.commonHeaderVisible = true;
                break;

            default:
                headerRespObj.commonHeaderVisible = true;
                break;
        }

        return headerRespObj;
    }
    render() {
        let headerData = this.getHeaderData();
        return (
            <View style={styles.headerContainer}>
                {headerData.commonHeaderVisible ? <Common  {...this.props} headerText={headerData.headerText} /> : null}
            </View>
        )
    }
}
