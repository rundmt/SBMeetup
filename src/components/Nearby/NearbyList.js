/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import NearbyItem from './NearbyItem';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  PropTypes,
  Text,
  ScrollView,
  View
} from 'react-native';


export default class NearbyList extends Component {
  render() {
    return (
      <View style={styles.container}>        
        {this.props.locations.map((location, index)=>
            <NearbyItem key={index} location={location} navigator={this.props.navigator}/>
        )}
      </View>
    );
  }
}

NearbyList.propTypes = {
  locations: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});
