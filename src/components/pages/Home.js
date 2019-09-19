import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    LayoutAnimation,
    UIManager,
    TouchableOpacity,
    Platform,
  } from 'react-native';

  export default class Home extends React.Component{
    constructor(props){
        super(props);
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
          }
    }

    render(){
        return(
            <View behavior="padding">
                <Text>Home</Text>
            </View>
        )
    }
  }