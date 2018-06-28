import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import Home from './Screens/Home';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profiel</Text>
      </View>
    );
  }
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
