/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import NearbyList from './NearbyList';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NearbyApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: [{name: 'Golden Gate Park', location: {lat: 123, long: 123}, numberOfPlayers: 10},
                  {name: 'Dolores Park', location: {lat: 123, long: 123}, numberOfPlayers: 13}]
    };
  }


  render() {
    return (
      <View>
        <NearbyList locations={this.state.locations}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
