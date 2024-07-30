import axios from 'axios';
import { CryptoDecoder, CryptoEncoder } from '../../auth';
import { StorageDataModification, Toaster } from '../../common-view-function';
import { ApiConfigUrl } from "./";

export function ApiCall(uriName, payload) {
    console.log("uriname---", uriName)
    return new Promise(async function (resolved, reject) {
        try {
            if (ApiConfigUrl.APP_LAST_URI[uriName].isAuth == true) {
                const token = await StorageDataModification.authData({}, "get");
                axios.interceptors.request.use(
                    config => {
                        if (config.headers.authorization === undefined) {
                            config.headers.authorization = `Bearer ` + token;
                        }
                        return config;
                    },
                    error => {
                        console.log(error);
                    }
                );
            }
            console.log("payload------", payload)
            if (ApiConfigUrl.APP_LAST_URI[uriName].method == "POST") {
                if (ApiConfigUrl.APP_LAST_URI[uriName].isEncrypt === true) {
                    payload = { payload: CryptoEncoder.CryptoEncode(payload) }
                }
                axios.post(ApiConfigUrl.APP_LAST_URI[uriName].path, payload)
                    .then(res => {
                        let response = res.data;
                        if (ApiConfigUrl.APP_LAST_URI[uriName].isEncrypt === true) {
                            response = CryptoDecoder.CryptoDecode(response)
                        }
                        resolved(response);
                    })

                    .catch(error => {
                        console.log("errrrroooooo", error)
                        // handle error
                        reject(error);
                    })
            } else if (ApiConfigUrl.APP_LAST_URI[uriName].method == "GET") {
                axios.get(ApiConfigUrl.APP_LAST_URI[uriName].path)
                    .then(res => {
                        let response = res.data;
                        console.log("respppp==========", response)
                        if (ApiConfigUrl.APP_LAST_URI[uriName].isEncrypt === true) {
                            response = CryptoDecoder.CryptoDecode(response)
                        }
                        resolved(response);
                    })
                    .catch(error => {
                        console.log("errrrroooooo", error)
                        // handle error
                        reject(error);
                    })
            }
        } catch (e) {
            reject(e);
        }
    })
}


export function ApiFileCall(uriName, payload) {
    return new Promise(async function (resolved, reject) {
        try {

            axios.post(ApiConfigUrl.APP_LAST_URI[uriName].path, payload)
                .then(res => {
                    let response = res.data;
                    if (ApiConfigUrl.APP_LAST_URI[uriName].isEncrypt === true) {
                        response = CryptoDecoder.CryptoDecode(response);
                    }
                    resolved(response);
                })
                .catch(error => {
                    console.log("error", error)
                    console.log("Network error");
                    Toaster.ShortCenterToaster('Network Error ,Please try again!')
                    // handle error
                    resolved(true);
                })
        } catch (e) {
            reject(e);
        }
    })
}

function wait() {
    new Promise((resolve) => { setTimeout(resolve, 4000) })
}