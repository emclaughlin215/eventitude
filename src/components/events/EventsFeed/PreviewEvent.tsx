import moment from 'moment';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ICombinedReducers } from '../../../reducers';
import { IEventsReducer } from '../../../reducers/EventsReducer';
import { ISettingsReducer } from '../../../reducers/SettingsReducer';
import { goToEvent } from './../../../actions/EventsFeedAction';
import { previewStyles as styles } from './styles';

interface IPreviewEventProps extends NavigationInjectedProps {
  eventId: string;
  eventsState: IEventsReducer;
  settingsState: ISettingsReducer;
  goToEvent: typeof goToEvent;
}

export class PreviewEvent extends React.Component<IPreviewEventProps> {
  constructor(props: IPreviewEventProps) {
    super(props);
  }

  goToEvent = () => {
    this.props.navigation.navigate('event');
    this.props.goToEvent({ eventId: this.props.eventId });
  };

  render() {
    console.log(this.props.eventsState.events[this.props.eventId].image);
    return (
      <TouchableOpacity style={styles.preview} onPress={() => this.goToEvent()}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.props.eventsState.events[this.props.eventId].title}</Text>
          <Text style={styles.date}>
            {moment(this.props.eventsState.events[this.props.eventId].dateTime, 'DD-MM-YYYY').format(
              this.props.settingsState.dateFormat,
            )}
          </Text>
        </View>
        <Image source={this.props.eventsState.events[this.props.eventId].image} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      goToEvent,
    },
    dispatch,
  );
};

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    eventsState: state.EventsReducer,
    settingsState: state.SettingsReducer,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(PreviewEvent));
