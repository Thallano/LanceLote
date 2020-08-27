import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import MenuTabs from './MenuTabs';
import Lance from '../pages/Lance';
import SingUp from '../pages/SingUp';
import SingIn from '../pages/SingIn';

const { Navigator, Screen } = createStackNavigator();

function AppStack () {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="SingIn" component={SingIn} />
                <Screen name="Dashboard" component={Dashboard}/> 
                <Screen name="SingUp" component={SingUp} />
                <Screen name="Lance" component={Lance}/>
                <Screen name="MenuTabs" component={MenuTabs} />        
            </Navigator>
        </NavigationContainer>
        
    )
}

export default AppStack;