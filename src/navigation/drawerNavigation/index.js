import React from 'react';
import { Login, Scanner } from '../../screens';
import { Color, Dimension, FontFamily, ImageName } from '../../enums';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import { StorageDataModification } from '../../services/common-view-function';

const Drawer = createDrawerNavigator();

const { useDispatch, useSelector } = require("react-redux");

class DrawerContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pageLoader: true,

        }
    }

    componentDidMount() {
        this._load()
    }

    _load = () => {
        this.setState({
            pageLoader: false
        })
    }

    closeDrawer = () => {
        this.props.navigation.closeDrawer();
    }

    onLogout = async () => {
        await StorageDataModification.removeLoginData();
        await StorageDataModification.removeAllStorageData();
        this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Login' }] }));

    }

    render() {
        if (this.state.pageLoader == true) {
            return null;
        } else {
            return (
                <DrawerContentScrollView
                    {...this.props}
                    contentContainerStyle={{ backgroundColor: "#3c3c3a", height: Dimension.height }}
                >
                    <View style={{ marginTop: 20, marginBottom: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15 }}>
                            <View style={{ flex: 1 }}>
                                <Image source={ImageName.CLIENT_LOGO} style={{ height: 80, width: 180, resizeMode: "contain" }} />
                            </View>
                            <TouchableOpacity onPress={() => this.closeDrawer()} style={{ marginRight: 10 }}>
                                <Image source={ImageName.WHITE_CROSS} style={{ height: 40, width: 40, resizeMode: "contain" }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, borderTopColor: "#8e8e8e" }}>
                        <View style={{ flexDirection: "row", paddingTop: 15, paddingHorizontal: 15, alignItems: "center" }}>
                            <View>
                                <Image source={ImageName.SCAN_ICON} style={{ height: 35, width: 35, resizeMode: "contain" }} />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ color: "#C6A625", fontSize: 20, fontFamily: FontFamily.FONTS.POPPINS.SEMI_BOLD }}>Scan</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ flexDirection: "row", paddingTop: 15, paddingHorizontal: 15, alignItems: "center" }} onPress={() => this.onLogout()}>
                            <View>
                                <Image source={ImageName.LOGOUT_ICON} style={{ height: 35, width: 35, resizeMode: "contain" }} />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ color: "#fff", fontSize: 20, fontFamily: FontFamily.FONTS.POPPINS.SEMI_BOLD }}>Log Out</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </DrawerContentScrollView>
            )
        }
    }
}

function DrawerNav() {
    const reduxData = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <Drawer.Navigator
            initialRouteName="Login"
            drawerContent={props => <DrawerContent {...props} {...reduxData} dispatch={dispatch} />}
            screenOptions={{
                drawerPosition: 'right',
                headerShown: false,
                drawerActiveBackgroundColor: '#002955',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff',
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontFamily: FontFamily.FONTS.INTER.BOLD,
                    fontSize: 15,
                },
                drawerStyle: {
                    width: Dimension.width - 100
                }
            }}
        >
            <Drawer.Screen name="Scanner" component={Scanner}
                options={{
                    headerShown: false,
                    drawerLabel: "Scanner",
                    drawerIcon: ({ focused, size }) => (
                        <Image source={ImageName.BURGER_MENU} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNav;