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
  View
} from 'react-native';

export default class NearbyItem extends Component {
  render() {    
    return (
      <View>
        <Text>
          {this.props.location.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
