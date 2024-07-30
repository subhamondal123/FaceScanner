// Define all the actions

export const setDeviceId = (deviceId) => ({
    type: "SET_DEVICEID",
    payload: deviceId,
});

export const stateUserInformation = (userInfo) => ({
    type: "SET_USER_INFORMATION",
    payload: userInfo,
});

export const loginData = (loginData) => ({
    type: "SET_USER_LOGINDATA",
    payload: loginData,
});

