import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Facts } from "../screens/Facts";
import { Home } from "../screens/Home";
import { Quotes } from "../screens/Quotes";
import { Alert, BackHandler } from "react-native";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    Alert.alert("Exit App?", "Press 'Yes' to exit the app.", [
      {
        text: "Yes",
        onPress: () => BackHandler.exitApp()
      },
      { text: "No", onPress: () => {} }
    ]);
    return true;
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#f4f4f4",
          width: 250,
        },
        
         drawerActiveTintColor: "maroon", 
        drawerInactiveTintColor: "gray", 
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Quotes" component={Quotes} />
      <Drawer.Screen name="Facts" component={Facts} />
    </Drawer.Navigator>
  );
  
};