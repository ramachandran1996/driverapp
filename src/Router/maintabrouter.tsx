import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import AuthStackScreen from "./components/AuthStack";
import HomeStackScreen from "./components/Homesttack";
import ProfileStackScreen from "./components/Profilestack";
import { DrawerContent } from "./components/drawercontent";

//declaretion of tab,homestack,profilestack,drawer
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

//intialization
const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none" mode="card">
    {userToken ? (
      <RootStack.Screen name="App" component={DrawerScreen} />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={MyTabs} />
  </Drawer.Navigator>
);

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: "#694fad" }}
      // style={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Incentives",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootStackScreen;
