import React from 'react';
import { Text, Dimensions, StyleSheet, View, ScrollView, Image, ActivityIndicator } from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

export class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ loading: false });
  }

  render() {
    return (
      <View>
        <ActivityIndicator animating={this.state.loading} size="large" color="#0000ff" />
        <ScrollView>
          <View style={styles.scrollView}>
            <Text style={styles.textHeader}>{this.props.state.title}</Text>
            <Image source={this.props.state.image} style={styles.image} />
          </View>
          <Text style={styles.textInfo}>Where: Amsterdam</Text>
          <Text style={styles.textInfo}>When: {this.props.state.date}</Text>
          <Text style={styles.textInfo}>Why: New Year's Eve BOIIII</Text>
        </ScrollView>
      </View>
    );
  }
}

Event.propTypes = {
  navigation: PropTypes.shape({
    date: PropTypes.str,
    title: PropTypes.str,
    image: PropTypes.str,
  }),
};

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

const mapStateToProps = (state) => {
  return {
    state: state.EventsFeedReducer,
  };
};

export default connect(mapStateToProps)(Event);
