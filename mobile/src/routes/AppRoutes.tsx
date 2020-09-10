import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import MenuTabsLot from './MenuTabsLot';
import MenuTabsLance from './MenuTabsLance';
import ProfileServicePage from '../pages/ProfileServicePage';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
   
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Dashboard" component={Dashboard}/>
            <AppStack.Screen name="ProfileServicePage" component={ProfileServicePage}/> 
            <AppStack.Screen name="MenuTabsLance" component={MenuTabsLance}/>
            <AppStack.Screen name="MenuTabsLot" component={MenuTabsLot} />
        </AppStack.Navigator>        
        
);

export default AppRoutes;