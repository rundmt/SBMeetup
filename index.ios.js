/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import NearbyApp from './src/components/Nearby/NearbyApp';
import JoinGameApp from './src/components/JoinGame/JoinGameApp';
import CreateGame from './src/components/CreateGame/CreateGameApp';
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var ParseComponent = ParseReact.Component(React);

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
      <Text style={[styles.navBarText, styles.navBarButtonText, {marginLeft: 20}]}>
        {previousRoute.title}
      </Text>
    </TouchableOpacity>
  );
},

RightButton: function(route, navigator, index, navState) {
  return (
      false
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
  constructor(props){
    super(props);
    Parse.initialize('rPQahlw3OxxkByBKphoRJ9zeXblVJO5DQIu1cfcs', 'BlPQQ1EgrD5Eqk9sET8Tb0U1jgIjKOpa2XZdf7tU' );
  }


  _renderScene(route, navigator){
    if(route.id === 'Nearby'){
      return (
        <NearbyApp navigator={navigator} />
      );
    } else if (route.id === 'JoinGame') {
      return (
        <JoinGameApp gameData={route.gameData} navigator={navigator} />
      );
    }else if (route.id === 'CreateGame'){
      return(
        <CreateGame navigator={navigator}/>
      );
    }
  }


  render() {
    return (
      <Navigator
          ref='navigator'
          initialRoute={{id: 'Nearby', title: 'Nearby' }}
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    marginTop: 50
  },
  navBar: {
    backgroundColor: '#00BCD4',
    height: 50
  },
  navBarText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }

});

AppRegistry.registerComponent('SBMeetup', () => SBMeetup);
