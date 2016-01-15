import React from 'react-native'
import Header from './Header'
import { UIImagePickerManager } from 'NativeModules'
import t from 'tcomb-form-native'

const Form = t.form.Form
const { View, Text, StyleSheet, ScrollView, TouchableHighlight, Image } = React

const imageOptions = {
  title: 'Select image', // specify null or empty string to remove the title
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take photo', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: 'Choose from Library', // specify null or empty string to remove this button
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'high', // 'low', 'medium', or 'high'
  maxWidth: 100, // photos only
  maxHeight: 100, // photos only
  quality: 1, // photos only
  allowsEditing: false, // Built in iOS functionality to resize/reposition the image
};

const ExpenseType = t.enums({
  'Communications': 'Communications',
  'Design': 'Design',
  'Donation': 'Donation',
  'Engineering': 'Engineering',
  'Food & Beverage': 'Food & Beverage',
  'Marketing': 'Marketing',
  'Legal': 'Legal',
  'Supplies & materials': 'Supplies & materials',
  'Travel': 'Travel',
  'Team': 'Team',
  'Office': 'Office',
  'Other': 'Other',
  'Web services': 'Web services',
})

const ExpensePaymentMethods = t.enums({
    'paypal': 'PayPal',
    'manual': 'Already paid'
})

const Expense = t.struct({
  title: t.String,
  amount: t.String,
  date: t.Date,
  type: ExpenseType,
  payment_method: ExpensePaymentMethods
})

const expenseOptions = {
  fields: {
    amount: {
      placeholder: '$ 0.00'
    }
  }
}

class TransactionNew extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
    this.state = { avatarSource: require('../assets/images/camera.png') }
  }
  upload() {
    UIImagePickerManager.showImagePicker(imageOptions, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('UIImagePickerManager Error: ', response.error);
      }
      else {
        // You can display the image using either data:
        // var source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        // console.log(source);

        // uri (on iOS)
        var source = {uri: response.uri.replace('file://', ''), isStatic: true};
        console.log(source);

        this.setState({
          avatarSource: source
        });
      }
    });
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <Header title="Submit expense" hasBackButton={true} navigator={this.props.navigator}/>
        <ScrollView>
          <TouchableHighlight onPress={this.upload}>
              <Image source={this.state.avatarSource} style={styles.image} />
          </TouchableHighlight>
          <Form
            ref="expense"
            type={Expense}
            options={expenseOptions}
          />
        </ScrollView>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 200,
    height: 150
  }
})

export default TransactionNew;
