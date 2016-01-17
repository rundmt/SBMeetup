/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var ParseComponent = ParseReact.Component(React);


import React, {
  AppRegistry,
  Component,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
  MapView,
  PickerIOS
} from 'react-native';

var PickerItemIOS = PickerIOS.Item;

var {width, height} = Dimensions.get('window');

export default class CreateGame extends ParseComponent {
  constructor(props){
    super(props);
    this.state = {
      gameName: '',
      numberOfPlayersRequired: '',
      startTime: ''
    };
    console.log(this.props.navigator.state.routeStack[this.props.navigator.state.routeStack.length -1].gameInfo);
  }

  observe(){
    return {
      parks: (new Parse.Query("Parks")).descending("createdAt"),
    };
  }
  render() {
    console.log(this.data.parks)
    return (
        <View style={styles.container}>
          <View style={styles.fields}>
            <Text>Game Name</Text>
            <TextInput
                  style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(gameName) => this.setState({gameName})}
                  value={this.state.gameName}/>
          </View>
          <View style={styles.fields}>
            <Text>Number Of Players</Text>
            <TextInput
            keyboardType='numeric'
            style={{width: 40, height: 40, borderColor: 'gray', borderWidth: 1, right: 0}}
            onChangeText={(numberOfPlayersRequired) => this.setState({numberOfPlayersRequired})}
            value={this.state.numberOfPlayersRequired}/>
          </View>
          <View>
          <Text>Choose Park</Text>
          <PickerIOS
            onValueChange={(parks) => this.setState({parks})}>
            {(this.data.parks).map((park, index) => (
           <PickerItemIOS
             key={index}
             value={index}
             label={park.name}
           />
         ))}
        </PickerIOS>

          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({

  fields:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  playerList: {

  },
  map: {
    flexDirection: 'row',
    height: 0.4 * height,
    width: width,
    borderWidth: 1,
    borderColor: '#000000',
  },
});
