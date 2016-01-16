import React from 'react-native'
import Header from '../components/Header'
import { UIImagePickerManager } from 'NativeModules'
import FMPicker from 'react-native-fm-picker'
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

const ExpenseType = [
  'Communications',
  'Design',
  'Donation',
  'Engineering',
  'Food & Beverage',
  'Marketing',
  'Legal',
  'Supplies & materials',
  'Travel',
  'Team',
  'Office',
  'Other',
  'Web services',
]

const ExpensePaymentMethods = [
    'PayPal',
    'Already paid'
]

const Expense = t.struct({
  title: t.String,
  amount: t.String,
  date: t.Date
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
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data:
        // var source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        // console.log(source);

        // uri (on iOS)
        var source = {uri: response.uri.replace('file://', ''), isStatic: true};
        console.log(source);

        this.setState({
          avatarSource: null
        });

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
        <ScrollView style={styles.container}>
          <TouchableHighlight onPress={this.upload} style={styles.uploadContainer}>
              <Image source={this.state.avatarSource} style={styles.image} />
          </TouchableHighlight>
          <Form
            ref="expense"
            type={Expense}
            options={expenseOptions}
          />
          <Text onPress={() => { this.refs.typePicker.show() }}>Type</Text>
          <Text onPress={() => { this.refs.typePicker.show() }}>Payment method</Text>
          <FMPicker ref={'typePicker'} options={ExpenseType} />
          <FMPicker ref={'paymentPicker'} options={ExpensePaymentMethods} />
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20
  },
  uploadContainer: {
    backgroundColor: '#F9FAFA',
    flex: 1,
    height: 150,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
  },
  button: {
    height: 36,
    backgroundColor: '#F3C524',
    borderRadius: 3,
    marginBottom: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
})

export default TransactionNew;
