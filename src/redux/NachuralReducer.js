import { combineReducers } from "redux";

const INITIAL_STATE = {
    deviceId: "",
    loginData: [],
    userInfo: {}
};

const NachuralReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_DEVICEID":
            state.deviceId = action.payload;
            return state;

        case "SET_USER_INFORMATION":
            state.userInfo = action.payload;
            return state;

        case "SET_USER_LOGINDATA":
            state.loginData = action.payload

        default:
            return state;
    }
};

export default combineReducers({
    NachuralRedux: NachuralReducer,
});
