import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import defaultMapStyle from './MapStyles';

export class Mapping extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    var mapStyle = defaultMapStyle;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          toolbarEnabled={true}
          initialRegion={{
            latitude: 51.6910897,
            longitude: -1.1862864,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
