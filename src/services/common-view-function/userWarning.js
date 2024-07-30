//  get the user worning
import React, { BackHandler } from 'react-native';
import { CommonActions } from "@react-navigation/native";
import { Alert } from "react-native";
import { AlertMessage } from "../../enums";
import { multipleRemove } from "../async-storage";
import { StorageDataModification } from '.';
import JailMonkey from 'jail-monkey';


export async function actionUnauthorizedDeviceWorning(props) {
    try {
        if (JailMonkey.isJailBroken()) {
            // Alert.alert(
            //     AlertMessage.MESSAGE.USER_WARNING.ACTION_TO_LOGOUT_TITLE,
            //     AlertMessage.MESSAGE.USER_WARNING.ROOT_DEVICE,
            //     [
            //         { text: "Yes", onPress: () => BackHandler.exitApp() }
            //     ]
            // );
            // return false;
            return true
        }
        // else if (await JailMonkey.isDevelopmentSettingsMode()) {
        //     Alert.alert(
        //         AlertMessage.MESSAGE.USER_WARNING.ACTION_TO_LOGOUT_TITLE,
        //         AlertMessage.MESSAGE.USER_WARNING.ENABLE_DEVELOPER_MODE,
        //         [
        //             { text: "Yes", onPress: () => BackHandler.exitApp() }
        //         ]
        //     );
        //     return false;
        // }
        else {
            return true;
        }
    } catch (e) {
        console.log(e);
    }
}
