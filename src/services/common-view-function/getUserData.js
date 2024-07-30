// This is for modify user data

import { LocationData, StorageDataModification } from ".";
import { getData } from "../async-storage";

export async function getUserData() {
    try {
        // let userInfo = await getData("userCredential");
        let userInfo = await StorageDataModification.userCredential({}, "get");
        let userObjData = {
            "clientId": userInfo.clientId == undefined || userInfo.clientId == null ? "" : userInfo.clientId.toString(),
            "customerId": userInfo.customerId == undefined || userInfo.customerId == null ? "" : userInfo.customerId.toString(),
            "ERPCode": userInfo.ERPCode == undefined || userInfo.ERPCode == null ? "" : userInfo.ERPCode.toString(),
            "roleId": userInfo.contactTypeId == undefined || userInfo.contactTypeId == null ? "" : userInfo.contactTypeId.toString(),
            "userType": userInfo.contactTypeId == undefined || userInfo.contactTypeId == null ? "" : userInfo.contactTypeId.toString(),
            "usertypeId": userInfo.contactTypeId == undefined || userInfo.contactTypeId == null ? "" : userInfo.contactTypeId.toString(),
            "userId": userInfo.customerId == undefined || userInfo.customerId == null ? "" : userInfo.customerId.toString(),
        };
        return userObjData;
    } catch (err) {
        console.log(err)
    }
}

export async function getAllUserData() {
    try {
        let userInfo = await StorageDataModification.userCredential({}, "get");
        let userObjData = {
            "clientId": userInfo.clientId == undefined || userInfo.clientId == null ? "" : userInfo.clientId.toString(),
            "customerId": userInfo.customerId == undefined || userInfo.customerId == null ? "" : userInfo.customerId.toString(),
            "ERPCode": userInfo.ERPCode == undefined || userInfo.ERPCode == null ? "" : userInfo.ERPCode.toString(),
            "roleId": userInfo.contactTypeId == undefined || userInfo.contactTypeId == null ? "" : userInfo.contactTypeId.toString(),
            "userId": userInfo.customerId == undefined || userInfo.customerId == null ? "" : userInfo.customerId.toString(),
            "userType": userInfo.contactTypeId == undefined || userInfo.contactTypeId == null ? "" : userInfo.contactTypeId.toString(),
            "usertypeId": userInfo.contactTypeId == undefined || userInfo.contactTypeId == null ? "" : userInfo.contactTypeId.toString(),
            "countryId": userInfo.countryId == undefined || userInfo.countryId == null ? "" : userInfo.countryId.toString(),
            "stateId": userInfo.countriesData[0].stateId == undefined || userInfo.countriesData[0].stateId == null ? "" : userInfo.countriesData[0].stateId.toString(),
            "districtId": userInfo.countriesData[0].districtId == undefined || userInfo.countriesData[0].districtId == null ? "" : userInfo.countriesData[0].districtId.toString(),
            "zoneId": userInfo.countriesData[0].zoneId == undefined || userInfo.countriesData[0].zoneId == null ? "" : userInfo.countriesData[0].zoneId.toString(),
        };
        return userObjData;
    } catch (err) {
        console.log(err)
    }
}

export async function getUserLocation() {
    try {
        // let userLocation = await getData("userCredential");
        let userLocation = await StorageDataModification.userCredential({}, "get");
        let currentLoc = await LocationData.fetchCurrentLocation();
        let userLocationData = {
            // "lattitude": "20.98",
            // "longitude": "89.71"
            "lattitude": currentLoc.latitude,
            "longitude": currentLoc.longitude
        };

        return userLocationData;
    } catch (err) {
        console.log(err)
    }
}