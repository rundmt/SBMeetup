/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import JoinGameButton from './JoinGameButton'
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var ParseComponent = ParseReact.Component(React);
var moment = require('moment');

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
    console.log('data', this.props.gameData);
    this.state = {
      gameInfo: this.props.gameData,
      players: this.props.gameData.players,
      modalShowing: false,
      newPlayerName: ''
    };
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

  getPlayers(){
    if(this.state.players){
      return(
        this.state.players.map((player,index)=>
          <Text key={index}>{player}</Text>
        ));
    } else {
      return (
        <Text>No Players</Text>
      );
    }
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
          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: width ,backgroundColor: 'white', padding: 10}}>
            <View style={{flexDirection: 'column', flex: 2, flexWrap: 'wrap', width: width}}>
              <View style={{flex: 1}}>
                <Text style={styles.header}>{this.state.gameInfo.name} @ {this.state.gameInfo.parkInfo.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{this.state.gameInfo.parkInfo.address}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column', flex: 1, flexWrap: 'wrap', width: width}}>
              <View style={{flex: 1}}>
                <Text>{moment(this.state.gameInfo.date.toString()).format('MMM Do, h:mma')}</Text>
              </View>

            </View>

          </View>
          <View style={styles.playerList}>
            <Text style={styles.listText}>Players List</Text>
            {this.getPlayers()}
          </View>

          <Modal
            animated={true}
            transparent={true}
            visible={this.state.modalShowing}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: width*0.8, height: 0.20*height, backgroundColor: 'white', padding: 20, borderWidth: 2, borderColor: 'black'}}>
                  <Text>Input Players Name</Text>
                  <TextInput
                      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                      onChangeText={(newPlayerName) => this.setState({newPlayerName})}
                      value={this.state.newPlayerName}
                    />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <TouchableOpacity style={{flex:1}} onPress= {this.addPlayer.bind(this)}>
                      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00ACC1'}}>
                        <Text>
                          Add
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress= {this.closeModal.bind(this)}>
                      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F44336'}}>
                        <Text>
                          Cancel
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity onPress= {this.launchModal.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Add Name To Players
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
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20
  },
  playerList: {
    padding: 10
  },
  map: {
    flexDirection: 'row',
    height: 0.4 * height,
    width: width,
  },
  button:{
    width: width,
    height: height * 0.05,
    backgroundColor: '#00ACC1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700'
  },
  listText: {
    fontSize: 20,
    fontWeight: "700"
  }
});
