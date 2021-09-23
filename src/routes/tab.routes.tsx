import React from 'react';

import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';

import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions, // optional
} from 'react-native-animated-nav-tab-bar';

const { Navigator, Screen } = AnimatedTabBarNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      appearance={{
        floating: true,
      }}
      tabBarOptions={{
        activeTintColor: '#1eff00',
        inactiveTintColor: '#ff0303',
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
}
