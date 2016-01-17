/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import NearbyItem from './NearbyItem';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class NewGameButton extends Component {
  gotoCreate(){
    this.props.navigator.push({id: 'CreateGame', title: 'Create'})
  }

  render() {
    return (
      <TouchableOpacity onPress={this.gotoCreate.bind(this)} style={{position: 'absolute', left:-20, bottom:20}}>
        <View>
          <Text style={styles.button}>
          Make a New Game!!!
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 20,
    textAlign: 'center',
    height: 80,
    width: 200,
    left:0
    }
});
