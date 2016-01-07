import React, { PropTypes } from 'react-native';
import DonationPicker from './DonationPicker';
import AsyncButton from './AsyncButton';

const {
  PickerIOS,
  View,
  Text,
  TextInput
} = React;

const PickerItemIOS = PickerIOS.Item;

class DonationForm extends React.Component {
  render () {
    return (
      <View>
        <View>
            <Text>Name</Text>
            <Text>Description</Text>
        </View>
        <Text>Make your donation</Text>
        <DonationPicker></DonationPicker>
        <View>
          <Text>Your payment method</Text>
          <Text>Add new</Text>
        </View>
        <View>
          <PickerIOS></PickerIOS>
          <Text>Description</Text>
          <TextInput></TextInput>
          <View>
            <AsyncButton></AsyncButton>
          </View>
        </View>
      </View>
    )
  }
}

export default DonationForm;
