import * as React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import Add from '../add/index';
import Update from '../update/index';
import Complete from '../complete/index';
import Profile from '../profile/index';
import Login from '../login/index';
import Register from '../register/index';
import {Local} from '../../utils/multiLanguage';
import MultiLanguage from '../multiLanguage/index';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14, color: 'white', fontWeight: 'bold'},
        tabBarStyle: {backgroundColor: '#075E54'},
        tabBarIndicatorStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen name={Local.ADD} component={Add} />
      <Tab.Screen name={Local.UPDATE} component={Update} />
      <Tab.Screen name={Local.COMPLETE} component={Complete} />
      <Tab.Screen name={Local.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
const Navigation = () => {
  const state = useSelector((state: any) => state.user);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={state.isLogin ? 'MyTabs' : 'MultiLanguage'}>
        <Stack.Screen
          name="MultiLanguage"
          component={MultiLanguage}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyTabs"
          component={connect(mapStateToProps)(MyTabs)}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function mapStateToProps(state: any) {
  return {props: state.language};
}

export default connect(mapStateToProps)(Navigation);
