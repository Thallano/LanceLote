import React from 'react';
/*import { NavigationContainer } from '@react-navigation/native';*/
import { createStackNavigator } from '@react-navigation/stack';

import SingUp from '../pages/SingUp';
import SingIn from '../pages/SingIn';
/*
import AppRoutes from './AppRoutes';
import Dashboard from '../pages/Dashboard';
import Lance from '../pages/Lance';
import MenuTabs from './MenuTabs';*/

/*const { Navigator, Screen } = createStackNavigator();*/

const AuthStack = createStackNavigator ();

const AppStack: React.FC = () =>{
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            {/*<Navigator screenOptions={{headerShown: false}}>*/}
                <AuthStack.Screen  name="SingIn" component={SingIn} />
                <AuthStack.Screen  name="SingUp" component={SingUp} />
            {/*</Navigator>*/}
        </AuthStack.Navigator>
    )
}

export default AppStack;