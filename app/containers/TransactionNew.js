import React from 'react-native'
import Header from '../components/Header'
import { UIImagePickerManager } from 'NativeModules'
import FMPicker from 'react-native-fm-picker'
import CustomActionSheet from 'react-native-custom-action-sheet'

const { View, Text, TextInput, PixelRatio, DatePickerIOS, StyleSheet, ScrollView, TouchableHighlight, Image } = React

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

class TransactionNew extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      avatarSource: require('../assets/images/camera.png'),
      title: null,
      amount: null,
      date: new Date(),
      method: null,
      category: null,
      note: null,
      modalVisible: false
    }
  }
  onChangeText(type) {
    this.setState({...type})
  }
  onDateChange(date) {
    this.setState({date})
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
  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }
  render () {
    const { navigator } = this.props;
    return (
      <View style={{flex: 1}}>
        <Header title="Submit expense" hasBackButton={true} navigator={this.props.navigator}/>
        <ScrollView style={styles.container}>
          <TouchableHighlight onPress={this.upload} style={styles.uploadContainer}>
              <Image source={this.state.avatarSource} style={styles.image} />
          </TouchableHighlight>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={styles.label}
              >Title</Text>
              <TextInput
                style={styles.input}
                onChangeText={(title) => this.onChangeText({title})}
              />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={styles.label}
              >Amount</Text>
              <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                placeholder='$ 0.00'
                onChangeText={(amount) => this.onChangeText({amount})}
              />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={styles.label}
              >Date</Text>
              <TextInput
                style={styles.input}
                onFocus={this.toggleModal}
                value={this.state.date.toLocaleDateString()}
              />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={styles.label}
              >Category</Text>
              <TextInput
                style={styles.input}
                onFocus={() => { this.refs.category.show() }}
                value={this.state.category}
              />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={styles.label}
              >Method</Text>
              <TextInput
                style={styles.input}
                onFocus={() => { this.refs.method.show() }}
                value={this.state.method}
              />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={styles.label}
              >Note</Text>
              <TextInput
                style={styles.input}
                multiline={true}
                onChangeText={(note) => this.onChangeText({note})}
              />
            </View>
          </View>
          <View>
            <CustomActionSheet modalVisible={this.state.modalVisible} onCancel={this.toggleModal}>
              <View style={{backgroundColor: 'white', marginBottom: 10, borderRadius: 5}}>
                <DatePickerIOS mode={"date"} date={this.state.date} onDateChange={this.onDateChange} />
              </View>
            </CustomActionSheet>
          </View>
          <FMPicker ref={'category'} options={ExpenseType} onSubmit={
              (category) => { this.setState({category}) }
            }/>
          <FMPicker ref={'method'} options={ExpensePaymentMethods} onSubmit={
              (method) => { this.setState({method}) }
            }/>
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
  },
  rowContainer: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#c8c7cc',
  },
  row: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center'
  },
  label: {
    width: 110,
    fontSize: 15,
    color: '#000',
    paddingLeft: 10
  },
  input: {
    fontSize: 15,
    flex: 1,
    height: 40,// @todo should be changed if underlined
    marginTop: 2
  }
})

export default TransactionNew;
