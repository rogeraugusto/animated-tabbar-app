import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function AppProvider({ children }: any) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
