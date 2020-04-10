import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

interface Props {}

interface State {}

export class Event extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.scrollView}>
            <Text style={styles.textHeader}>
              {this.props.navigation.getParam('eventTitle')}
            </Text>
            <Image
              source={this.props.navigation.getParam('image')}
              style={styles.image}
            />
          </View>
          <Text style={styles.textInfo}>Where: Amsterdam</Text>
          <Text style={styles.textInfo}>
            When: {this.props.navigation.getParam('date')}
          </Text>
          <Text style={styles.textInfo}>Why: New Year's Eve BOIIII</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textHeader: {
    fontSize: 40,
    alignSelf: 'flex-start',
    padding: 10,
  },
  textInfo: {
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingLeft: 15,
    paddingTop: 5,
  },
  image: {
    height: Dimensions.get('window').width / 1.5,
    width: Dimensions.get('window').width / 1.5,
    alignItems: 'center',
  },
});
