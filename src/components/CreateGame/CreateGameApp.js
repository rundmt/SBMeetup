/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var ParseComponent = ParseReact.Component(React);

import React, {
  Component,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
  MapView,
  PickerIOS,
  DatePickerIOS
} from 'react-native';

var PickerItemIOS = PickerIOS.Item;

var {width, height} = Dimensions.get('window');

export default class CreateGame extends ParseComponent {
  constructor(props){
    super(props);
    this.state = {
      gameName: '',
      numberOfPlayersRequired: '',
      startTime: '',
      parkIndex: 0,
      date: new Date(),
    };

  }

  updateDateChange(newDate) {
    this.setState({date: newDate});
  }

  createGame(){
    var data = {
                name: this.state.gameName,
                numberOfPlayers: 1,
                numberRequired: parseInt(this.state.numberOfPlayersRequired),
                date: this.state.date,
                parkInfo: this.data.parks[this.state.parkIndex]
              };
    console.log(data);
    var Game = Parse.Object.extend('Games');
    var game = new Game();
    var self = this;
    game.save(data,{
      success: function(game){
        self.props.navigator.push({id: 'JoinGame', data: game, title: 'Game'});
      },
      error: function(game, error){

      }
    });
  }

  observe(){
    return {
      parks: (new Parse.Query('Parks')).descending('createdAt'),
    };
  }
  render() {
    console.log(this.state.date);
    return (
        <View style={styles.container}>
          <View style={styles.fields}>
            <View style={styles.container}>
            <Text style={styles.label}>Game Name</Text>
            <TextInput
                  style={{width: 200, height: 40, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}
                  onChangeText={(gameName) => this.setState({gameName})}
                  value={this.state.gameName}/>
            </View>
          </View>
          <View style={styles.fields}>
            <View style={styles.container}>
              <Text style={styles.label}>Number Of Players</Text>
              <TextInput
              keyboardType='numeric'
              style={{width: 200, height: 40, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}
              onChangeText={(numberOfPlayersRequired) => this.setState({numberOfPlayersRequired})}
              value={this.state.numberOfPlayersRequired}/>
            </View>
          </View>
          <View>
            <Text style={styles.label}>Select a Time For Today</Text>
            <DatePickerIOS
              date={this.state.date}
              mode="time"
              onDateChange={this.updateDateChange.bind(this)}
              minuteInterval={30}
            />
          </View>
          <View style={styles.fields}>
          <Text style={styles.label}>Choose Park</Text>
          <PickerIOS
            style={{width: 200}}
            selectedValue={this.state.parkIndex}
            key={this.state.parkIndex}
            itemStyle={{fontSize: 14, color: 'red', textAlign: 'left', height: height*0.2}}
            onValueChange={(park) => this.setState({parkIndex: park})}>
            {this.data.parks.map((park, index) => (
              <PickerItemIOS
                key={index}
                value={index}
                label={park.name}
              />
            ))}
          </PickerIOS>

          </View>
          <TouchableOpacity onPress={this.createGame.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Create Game</Text>
            </View>
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({

  fields:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop:10
  },
  label: {
    fontSize: 14,
    fontWeight: '600'
  },
  map: {
    flexDirection: 'row',
    height: 0.4 * height,
    width: width,
    borderWidth: 1,
    borderColor: '#000000',
  },
  button:{
    width: width,
    height: height * 0.05,
    backgroundColor: '#00ACC1'
  },
  buttonText: {
    color: 'white'
  },
});
