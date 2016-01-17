/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import JoinGameButton from './JoinGameButton'
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
  MapView
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class JoinGameApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      gameInfo: this.props.navigator.state.routeStack[this.props.navigator.state.routeStack.length -1].gameInfo,
      players: this.props.navigator.state.routeStack[this.props.navigator.state.routeStack.length -1].gameInfo.players,
      modalShowing: false,
      newPlayerName: ''
    };
    console.log(this.state.gameInfo);
    // console.log(this.props.navigator.state.routeStack[this.props.navigator.state.routeStack.length -1].gameInfo);
  }

  addPlayer(){
    var Game = Parse.Object.extend('Games');
    var query = new Parse.Query(Game);
    var self = this;
    var newName = this.state.newPlayerName;
    this.state.players.push(newName);
    // this.setState({players: })
    query.get(this.state.gameInfo.objectId, {
      success: function(game) {
        game.add('players', newName);
        game.increment("numberOfPlayers");
        game.save();
        // The object was retrieved successfully.
      },
      error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
      }
    });
    // var newPlayer = {name: this.state.newPlayerName };
    // this.state.playerinfo.push(newPlayer);
    this.closeModal();
  }

  closeModal(){
    this.setState({newPlayerName: ''});
    this.setState({modalShowing: false});
  }

  launchModal(){
    this.setState({modalShowing: true});
  }

  render() {
    return (
        <View style={styles.container}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <MapView
            style={styles.map}
            region={{latitude: 37.422733, longitude: -122.087662,  latitudeDelta: 0.01, longitudeDelta: 0.03}}
          />
        </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: width}}>
            <View style={{flexDirection: 'column', flex: 1, flexWrap: 'wrap', width: width}}>
              <View style={{flex: 1}}>
                <Text>{this.state.gameInfo.name} @ {this.state.gameInfo.parkInfo.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{this.state.gameInfo.parkInfo.address}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column', flex: 1, flexWrap: 'wrap', width: width}}>
              <View style={{flex: 1}}>
                <Text>{this.state.gameInfo.date.toString()}</Text>
              </View>

            </View>

          </View>
          <View style={styles.playerList}>
            {this.state.players.map((player,index)=>
              <Text key={index}>{player}</Text>

            )}
          </View>

          <Modal
            animated={true}
            transparent={true}
            visible={this.state.modalShowing}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: width, height: 0.3*height, backgroundColor: 'white'}}>
                  <Text>Input Players Name</Text>
                  <TextInput
                      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                      onChangeText={(newPlayerName) => this.setState({newPlayerName})}
                      value={this.state.newPlayerName}
                    />
                  <TouchableOpacity onPress= {this.addPlayer.bind(this)}>
                    <View>
                      <Text>
                        Add
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress= {this.closeModal.bind(this)}>
                    <View>
                      <Text>
                        Cancel
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity onPress= {this.launchModal.bind(this)}>
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
