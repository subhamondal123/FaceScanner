import { App_uri } from '../../config';

export const APP_LAST_URI = Object.freeze({

    recognition: {
        path: App_uri.BASE_URI + "initiate-recognition",
        isAuth: false,
        isPicLocation: false,
        isEncrypt: false,
        method: "POST"
    },

})