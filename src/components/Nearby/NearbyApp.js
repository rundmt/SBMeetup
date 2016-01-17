/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import NearbyList from './NearbyList';
import NewGameButton from './NewGameButton'
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var ParseComponent = ParseReact.Component(React);

import React, {
  AppRegistry,
  Component,
  Dimensions,
  MapView,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
var {width, height} = Dimensions.get('window');

function returnCoords(games) {
  return games.parkInfo.coordinates;
}

export default class NearbyApp extends ParseComponent {
  constructor(props){
    super(props);
  }

  observe(){
    return {
      games: (new Parse.Query("Games")).descending("createdAt"),
    };
  }

  getCoordinates(){
    return this.data.games.map(returnCoords);
  }

  render() {    
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{latitude: 37.422733, longitude: -122.087662,  latitudeDelta: 0.01, longitudeDelta: 0.03}}
        />
        <ScrollView style={styles.container}>
          <NearbyList navigator={this.props.navigator} locations={this.data.games}/>
        </ScrollView>
        <NewGameButton navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flexDirection: 'row',
    height: 0.4 * height,
    width: width,
    borderWidth: 1,
    borderColor: '#000000',
  },
});
