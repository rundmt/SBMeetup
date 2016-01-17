/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import NearbyList from './NearbyList';
import NewGameButton from './NewGameButton'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

export default class NearbyApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: [{gameInfo: {
                      name: 'something',
                      numberOfPlayers: 10,
                      spotsLeft: 4,
                      time:'12:15PM'
                  },
                  locationInfo: {
                    park: 'Golden Gate Park',
                    location: {lat: 123, long: 123}
                  }
                },
                {gameInfo: {
                        name: 'something2',
                        numberOfPlayers: 13,
                        spotsLeft: 1,
                        time:'4:00PM'
                    },
                    locationInfo: {
                      park: 'Dolores Park',
                      location: {lat: 123, long: 123}
                    }
                }
        ]
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <NearbyList navigator={this.props.navigator} locations={this.state.locations}/>
        </ScrollView>
        <NewGameButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
