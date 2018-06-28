import React from 'react';
import { Button, Text, View } from 'react-native';
import { Permissions } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraRollPermission: null,
    };
  }

  pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraRollPermission: status === 'granted' });

    if (status === 'granted') {
      console.log('We kunnen!')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profiel</Text>
        <Button title='Vraag om toestemming' onPress={ this.pickImage } />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
