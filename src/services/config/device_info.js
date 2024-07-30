import DeviceInfo from 'react-native-device-info';
import NetInfo from "@react-native-community/netinfo";


// get device unique id
export function DeviceUniqueId() {
  return new Promise(function (resolved, reject) {
    try {
      let uniqueId = DeviceInfo.getUniqueId();
      resolved(uniqueId);
    } catch (e) {
      reject(e)
    }
  });
}


// Check the network connection
export function CheckConnection() {
  return new Promise(function (resolved, reject) {
    try {
      const unsubscribe = NetInfo.addEventListener(state => {
        resolved(state.isConnected)
      })

      unsubscribe();
    } catch (e) {
      reject(e)
    }
  });
}

// // Check the network connection
// export function GetCurTimeZone() {
//   const timezone = RNLocalize.getTimeZone();
//   return timezone;
// }