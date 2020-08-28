import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import MenuTabs from './MenuTabs';
import Lance from '../pages/Lance';

/*const { Navigator, Screen } = createStackNavigator();*/
const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
   
        /*<NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Dashboard" component={Dashboard}/> 
                <Screen name="Lance" component={Lance}/>
                <Screen name="MenuTabs" component={MenuTabs} />        
            </Navigator>
        </NavigationContainer>*/
        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Dashboard" component={Dashboard}/> 
            <AppStack.Screen name="Lance" component={Lance}/>
            <AppStack.Screen name="MenuTabs" component={MenuTabs} />
        </AppStack.Navigator>        
        
);

export default AppRoutes;