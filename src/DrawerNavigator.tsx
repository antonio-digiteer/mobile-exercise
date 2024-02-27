import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FactsScreen } from "./FactsScreen";
import { HomeScreen } from "./HomeScreen";
import { QuotesScreen } from "./QuotesScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="QuotesScreen" component={QuotesScreen} />
      <Drawer.Screen name="Facts" component={FactsScreen} />
    </Drawer.Navigator>
  );
};
