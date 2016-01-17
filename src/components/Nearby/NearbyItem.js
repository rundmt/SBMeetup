/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

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
      <TouchableOpacity onPress={this.showGame.bind(this)}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri:'http://lorempixel.com/400/200/sports/'}}/>
        <Text>
          Location: {this.props.location.parkInfo.name + "\n"}
          Time: {this.props.location.time + "\n"}
          Players Needed: {this.props.location.numberRequired - this.props.location.numberOfPlayers}
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 2,
    borderColor: 'blue',
    marginTop: 20
  }
});
