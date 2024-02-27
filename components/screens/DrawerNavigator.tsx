import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import QuotesScreen from './QuotesScreen'; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Quotes" component={QuotesScreen}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;


// import { Text } from '@rneui/base';
// import React from 'react';
// import { View } from 'react-native';

// function DrawerNavigator() {
//   return (
//     <View>
//      <Text>Test</Text>
//     </View>
//   );
// }

// export default DrawerNavigator;