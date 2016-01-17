/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import NearbyItem from './NearbyItem';

import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class NewGameButton extends Component {
  gotoCreate(){
    this.props.navigator.push({id: 'CreateGame', title: 'Create'})
  }

  render() {
    return (
      <TouchableOpacity onPress={this.gotoCreate.bind(this)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Make a New Game
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  button:{
    width: width,
    height: height * 0.07,
    backgroundColor: '#00ACC1'
  },
  buttonText: {
    color: 'white'
  }
});
