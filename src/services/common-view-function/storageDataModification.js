import { getData, multipleRemove, singleRemove, storeData } from "../async-storage";

const USER_LOGIN_DATA = "PcXlaba3#Hi#OVKj_d";

//  Here define all the storage data key
export const allStorageVariable = [
    USER_LOGIN_DATA
]

// for remove the data which is stored in login
export async function removeLoginData() {
    await multipleRemove([
        USER_LOGIN_DATA
    ]);
}

export async function removeAllStorageData() {
    await multipleRemove(allStorageVariable);
}

export async function userCredential(data, type) {
    switch (type) {
        case "store":
            if (data) {
                await storeData(USER_LOGIN_DATA, data);
            }
            return true;
        case "get":
            return await getData(USER_LOGIN_DATA);

        case "clear":
            return await singleRemove(USER_LOGIN_DATA);

        default:
            return true;
    }
}
