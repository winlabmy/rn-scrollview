import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, Text } from 'react-native';

export default class ScrollViewApp extends Component {
  render() {
    return(
      <ScrollView>
        <Text style={styles.text}>Scroll me please</Text>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Text style={styles.text}>If you like</Text>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Text style={styles.text}>Scroll downnn</Text>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} style={styles.imageStyle}/>
        <Text style={styles.textBottom}>React Native</Text>
      </ScrollView>
    );
  }  
}

const styles = StyleSheet.create({
  text: {
    fontSize: 96
  },
  textBottom: {
    fontSize: 80
  },
  imageStyle: {
    width: 64,
    height: 64
  }
})