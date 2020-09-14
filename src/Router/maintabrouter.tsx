import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { View, Button, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={NotificationsScreen}
        options={{
          title: "overview",
          headerLeft: () => {
            return (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#009387"
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            );
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Home"
        component={NotificationsScreen}
        options={{
          title: "overview",
          headerLeft: () => {
            return (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#009387"
                onPress={() => {
                  navigation.openDrawer();
                }}
              />
            );
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" />
       */}
      <Text>hi</Text>
    </View>
  );
}

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
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
