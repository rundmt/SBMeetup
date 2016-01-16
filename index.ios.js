/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import NearbyApp from './src/components/Nearby/NearbyApp';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
var NavigationBarRouteMapper = {

LeftButton: function(route, navigator, index, navState) {
  if (index === 0) {
    return null;
  }

  var previousRoute = navState.routeStack[index - 1];
  return (
    <TouchableOpacity
      onPress={() => navigator.pop()}
      style={styles.navBarLeftButton}>
      <Text style={[styles.navBarText, styles.navBarButtonText]}>
        {previousRoute.title}
      </Text>
    </TouchableOpacity>
  );
},

RightButton: function(route, navigator, index, navState) {
  return (
    <TouchableOpacity
      onPress={() => navigator.push({id: 'Match', title: "Match" })}
      style={styles.navBarRightButton}>
      <Text style={[styles.navBarText, styles.navBarButtonText]}>
        Next
      </Text>
    </TouchableOpacity>
  );
},

Title: function(route, navigator, index, navState) {
  return (
    <Text style={[styles.navBarText, styles.navBarTitleText]}>
      {route.title}
    </Text>
  );
},

};



class SBMeetup extends Component {



  _renderScene(route, navigator){
    if(route.id === 'Nearby'){
      return (
        <NearbyApp navigator={navigator} />
      );
    }
  }


  render() {
    return (
      <Navigator
          ref='navigator'
          initialRoute={{id: 'Nearby', title: "Nearby" }}
          renderScene={this._renderScene}
          sceneStyle={styles.container}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper}
              style={styles.navBar}
            />
          }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SBMeetup', () => SBMeetup);
