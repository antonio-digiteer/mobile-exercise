import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FactsScreen } from "./FactsScreen";
import { HomeScreen } from "./HomeScreen";
import { QuotesScreen } from "./QuotesScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ drawerLabel: "Home", headerTitle: "Home" }}
      />
      <Drawer.Screen
        name="QuotesScreen"
        component={QuotesScreen}
        options={{ drawerLabel: "Quotes", headerTitle: "Quotes" }}
      />
      <Drawer.Screen
        name="FactsScreen"
        component={FactsScreen}
        options={{ drawerLabel: "Facts", headerTitle: "Facts" }}
      />
    </Drawer.Navigator>
  );
};
