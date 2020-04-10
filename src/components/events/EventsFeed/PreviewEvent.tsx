import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

interface Props {
  title: String;
  date: String;
  image: String;
}

interface State {}

export class PreviewEvent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.preview}
        onPress={() =>
          this.props.navigation.navigate('event', {
            eventTitle: this.props.title,
            image: this.props.image,
            date: this.props.date,
          })
        }>
        <View style={styles.header}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.date}>{this.props.date}</Text>
        </View>
        <Image source={this.props.image} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flexDirection: 'column',
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  image: {
    height: 512,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
});
