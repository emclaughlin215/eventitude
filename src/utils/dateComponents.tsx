import React from 'react';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

export class MyDatePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DatePicker
        style={{ width: 175 }}
        date={this.props.defaultValue}
        mode={this.props.editType === 'dateTimePicker' ? 'datetime' : 'date'}
        format={this.props.editType === 'dateTimePicker' ? 'Ha Do MMM YYYY' : 'DD-MM-YYYY'}
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
      />
    );
  }
}
