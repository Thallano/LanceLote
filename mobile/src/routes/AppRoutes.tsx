import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import MenuTabsLot from './MenuTabsLot';
import MenuTabsLance from './MenuTabsLance';

/*const { Navigator, Screen } = createStackNavigator();*/
const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
   
        /*<NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Dashboard" component={Dashboard}/> 
                <Screen name="Lance" component={Lance}/>
                <Screen name="MenuTabsLot" component={MenuTabsLot} />        
            </Navigator>
        </NavigationContainer>*/
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Dashboard" component={Dashboard}/> 
            <AppStack.Screen name="MenuTabsLance" component={MenuTabsLance}/>
            <AppStack.Screen name="MenuTabsLot" component={MenuTabsLot} />
        </AppStack.Navigator>        
        
);

export default AppRoutes;