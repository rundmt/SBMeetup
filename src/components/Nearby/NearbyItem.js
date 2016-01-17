/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var moment = require('moment');
import React, {
  Component,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class NearbyItem extends Component {
  constructor(props){
    super(props);
  }

  showGame(){
    console.log(this.props.navigator);
    this.props.navigator.push({id: 'JoinGame', title: 'Game',gameInfo: this.props.location });
  }

  render() {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={this.showGame.bind(this)} style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            source={{uri:'http://lorempixel.com/400/200/sports/'}}/>
          <Text style={styles.info}>
            @{this.props.location.parkInfo.name + "\n"}
            Time: {moment(this.props.location.date.toString()).format('MMM Do, h:mma') + "\n"}
            Spots Available: {this.props.location.numberRequired - this.props.location.numberOfPlayers}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: width,
  },
  image: {
    height: width* 0.2,
    flex: 1
  },
  info:{
    flex: 3,
    marginTop: 10,
    marginLeft: 20,
    fontSize: 15
  }
});
