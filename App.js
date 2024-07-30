import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Login, QrScanner, Scanner, UserDetails, WelcomeScreen } from "./src/screens";
import { LogBox } from "react-native";
import { createStore } from "redux";
import NachuralReducer from "./src/redux/NachuralReducer";
import { Provider } from "react-redux";
import { DrawerNav } from "./src/navigation";

const Stack = createStackNavigator();

const store = createStore(NachuralReducer);

LogBox.ignoreLogs([
  "Require cycle: node_modules/victory",
]);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="WelcomeScreen">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
            <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />

            <Stack.Screen name="QrScanner" component={QrScanner} options={{ headerShown: false }} />

            <Stack.Screen name="UserDetails" component={UserDetails} options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;