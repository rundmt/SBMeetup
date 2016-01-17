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
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

export default class NearbyApp extends ParseComponent {
  constructor(props){
    super(props);

    // ParseReact.Mutation.Create("Games", {
    //                 name: 'Test 3',
    //                 numberOfPlayers: 5,
    //                 numberRequired: 18,
    //                 date: new Date('1/16/19 10:15 PM'),
    //                 parkInfo: {
    //                   id: 'fUKdfAREB2',
    //                   park: 'Dolores Park',
    //                   location: {lat: 37.759768, long: -122.427079},
    //                   address: '55 Music Concourse Dr, San Francisco, CA 94118'
    //                 }
    //             }).dispatch();
    this.state = {
      locations: [{gameInfo: {
                      name: 'Battle 60',
                      numberOfPlayers: 10,
                      spotsLeft: 4,
                      time:'12:15PM'
                  },
                  locationInfo: {
                    park: 'Golden Gate Park',
                    location: {lat: 123, long: 123},
                    address: '55 Music Concourse Dr, San Francisco, CA 94118'
                  }
                },
                {gameInfo: {
                        name: 'Play 6060',
                        numberOfPlayers: 13,
                        spotsLeft: 1,
                        time:'4:00PM'
                    },
                    locationInfo: {
                      park: 'Dolores Park',
                      location: {lat: 123, long: 123},
                      address: '19th & Dolores St, San Francisco, CA 94114'
                    }
                }
        ]
    };
  }

  observe(){
    return {
      games: (new Parse.Query("Games")).descending("createdAt"),
    };
  }

  render() {
    console.log(this.data.games);
    // this.data.games[1].set('parkId', 'fUKdfAREB2');
    // this.data.games[1].save();
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <NearbyList navigator={this.props.navigator} locations={this.state.locations}/>
        </ScrollView>
        <NewGameButton navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
