import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Facts } from "../screens/Facts";
import { Home } from "../screens/Home";
import { Quotes } from "../screens/Quotes";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#f4f4f4",
          width: 250,
        },
        
         drawerActiveTintColor: "maroon", // Color of the active item in the drawer
        drawerInactiveTintColor: "gray", // Color of inactive items in the drawer
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Quotes" component={Quotes} />
      <Drawer.Screen name="Facts" component={Facts} />
    </Drawer.Navigator>
  );
};
