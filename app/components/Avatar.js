import React from 'react-native';
const { View, Image, StyleSheet, propsTypes } = React;

class Avatar extends React.Component {
  render () {
    let url = true;
    if(url) {
      return <Image source={url} className='Avatar' />
    } else {
      return (
        <Image source='avatar.png' className='Avatar' style={style.avatar}/>
      )
    }
  }
}

const style = StyleSheet.create({
  avatar: {
    width: 55,
    height: 55
  }
});

export default Avatar;
