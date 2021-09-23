import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';

import theme from '../global/styles/theme';

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';

const { Navigator, Screen } = AnimatedTabBarNavigator();

interface TabIconColor {
  name: string;
  size: number;
  color: string;
}

export default function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      appearance={{
        floating: true,
        tabBarBackground: theme.colors.primary,
        whenActiveShow: TabElementDisplayOptions.BOTH,
        dotSize: DotSize.SMALL,
      }}
      tabBarOptions={{
        activeBackgroundColor: theme.colors.secondary,
        activeTintColor: theme.colors.white,
        inactiveTintColor: theme.colors.secondary_light,
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }: TabIconColor) => (
            <Icon name="compass-outline" size={42} color={color} />
          ),
        }}
      />
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }: TabIconColor) => (
            <Icon name="monitor-dashboard" size={42} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
