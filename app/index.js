/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import AuthScreen from './screens/Auth';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home'



// Register Screens
Navigation.registerComponent("comebackApp.AuthScreen", () => AuthScreen)

// Start an app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'comebackApp.AuthScreen',
    title: 'Login'
  }
});
