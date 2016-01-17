/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

export default class JoinGameApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerinfo: [
        {name: 'player1'},
        {name:'player2'}
      ]
    };
  console.log(this.props.navigator.state.routeStack[this.props.navigator.state.routeStack.length -1].gameInfo.locationInfo.location);
}


render() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>

        {this.state.playerinfo.map((player, index)=>
          <Text key={index}>{player.name}</Text>
        )}


      </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
