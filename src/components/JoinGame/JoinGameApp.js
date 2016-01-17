/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import JoinGameButton from './JoinGameButton'
import React, {
  AppRegistry,
  Component,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  MapView
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class JoinGameApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerinfo: [
        {name: 'player1'},
        {name:'player2'}
      ]
    };
    console.log(this.props.navigator.state.routeStack[this.props.navigator.state.routeStack.length -1].gameInfo);
  }

  joinGame(){
    var newPlayer = {name: 'player' + (this.state.playerinfo.length+1) };
    var newplayerinfo = this.state.playerinfo.push(newPlayer);

    this.setState({playerinfo: this.state.playerinfo});
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{latitude: 37.422733, longitude: -122.087662,  latitudeDelta: 0.01, longitudeDelta: 0.03}}
        />
        <View style={styles.playerList}>
          {this.state.playerinfo.map((player, index)=>
            <Text key={index}>{player.name}</Text>
          )}
        </View>
        <TouchableOpacity onPress= {this.joinGame.bind(this)} style={{position: 'absolute', left:-20, bottom:20}}>
          <View>
            <Text style={styles.button}>
            Join Game
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 20,
    textAlign: 'center',
    height: 80,
    width: 200,
    left:0
  },
  playerList: {
    backgroundColor: 'blue'
  },
  map: {
    height: 0.4 * height,
    width: width,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});
