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
  View
} from 'react-native';

export default class NearbyList extends Component {
  render() {
    return (
      <View>
        {this.props.locations.map((location, index)=>
            <NearbyItem key={index} location={location}/>
        )}
      </View>
    );
  }
}

NearbyList.propTypes = {
  locations: PropTypes.array.isRequired
};

const styles = StyleSheet.create({

});
