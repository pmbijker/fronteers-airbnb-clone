import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome } from '@expo/vector-icons';

import Home from './Screens/Home';
import Profile from './Screens/Profile';

EStyleSheet.build();

export default createBottomTabNavigator(
  {
    Home, // ES6+
    Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'search';
            break;
          case 'Profile':
            iconName = 'user-o';
            break;
        }
        return <FontAwesome name={ iconName } size={ 25 } color={ tintColor } />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#fd5c63',
      inactiveTintColor: 'gray',
    },
  }
);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
