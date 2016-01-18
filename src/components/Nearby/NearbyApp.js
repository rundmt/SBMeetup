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

export default class NearbyApp extends ParseComponent {
  constructor(props){
    super(props);
    this.state ={
      initialPosition: {
        coords: {
          latitude : 'unknown',
          longitude: 'unknown'
        }
      },
      markers: []
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position;
        this.setState({initialPosition});
        console.log(this.state.initialPosition);
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  observe(){
    return {
      games: (new Parse.Query("Games")).descending("createdAt"),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{latitude: this.state.initialPosition.coords.latitude, longitude: this.state.initialPosition.coords.longitude,  latitudeDelta: 0.01, longitudeDelta: 0.03}}
          annotations={[{latitude: this.state.initialPosition.coords.latitude, longitude: this.state.initialPosition.coords.longitude}]}
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
  },
});
