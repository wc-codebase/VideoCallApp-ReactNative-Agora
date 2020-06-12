import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CounterApp from '../src/CounterApp';
import HomeScreen from '../src/HomeScreen';
const Stack = createStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName="Counter">
          <Stack.Screen
            name="Counter"
            component={CounterApp}
            options={{
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#000'},
              headerShown: true,
              headerTitle: 'Counter',
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTintColor: 'white',
              headerStyle: {backgroundColor: '#000'},
              headerShown: true,
              headerTitle: 'Home',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
