import React from 'react';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { ICombinedReducers } from '../reducers/index';
import { ISettingsReducer } from '../reducers/SettingsReducer';

export interface IMyDatePicker {
  editType: String;
  defaultValue: String;
  callback: (val: Date | String) => void;
}

interface IMyDatePickerWithState extends IMyDatePicker {
  settingsState: ISettingsReducer;
}

export class MyDatePicker extends React.Component<IMyDatePickerWithState> {
  constructor(props: IMyDatePickerWithState) {
    super(props);
  }

  render() {
    const dateFormat = this.props.settingsState.dateFormat;
    return (
      <DatePicker
        style={{ width: 175 }}
        date={this.props.defaultValue}
        mode={this.props.editType === 'dateTimePicker' ? 'datetime' : 'date'}
        format={this.props.editType === 'dateTimePicker' ? 'DD-MM-YYYY HH:mm' : 'DD-MM-YYYY'}
        minDate={moment()
          .subtract(100, 'y')
          .format('DD-MM-YYYY')}
        maxDate={moment()
          .add(10, 'y')
          .format('DD-MM-YYYY')}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={this.props.callback}
        getDateStr={(date: Date) =>
          this.props.editType === 'dateTimePicker'
            ? moment(date, 'DD-MM-YYYY HH:mm').format('HH mm Do MMM YYYY')
            : moment(date, 'DD-MM-YYYY').format(dateFormat.toString())
        }
      />
    );
  }
}

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    settingsState: state.SettingsReducer,
  };
};

export default connect(mapStateToProps)(MyDatePicker);
