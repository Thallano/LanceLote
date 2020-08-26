import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import MenuTabs from './MenuTabs';
import Lance from '../pages/Lance';
import Lot from '../pages/Lot';


const { Navigator, Screen } = createStackNavigator();

function AppStack () {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Dashboard" component={Dashboard}/>    
                <Screen name="Lance" component={Lance}/> 
                <Screen name="Lot" component={Lot}/>         
            </Navigator>
        </NavigationContainer>
        
    )
}

export default AppStack;