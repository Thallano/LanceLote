import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Lance from '../pages/Lance';
import Lanced from '../pages/Lanced';

const {Navigator, Screen} = createBottomTabNavigator ();

function MenuTabsLance() {
    return (
        <Navigator 
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shadowOpacity: 0,
                    /*height: 70,*/
                    backgroundColor: '#14181C',
                    BorderlessButton: 1,
                    borderTopColor: 'transparent',
                },
                tabStyle:{
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                },

                iconStyle:{
                   flex: 0,
                   width: 40,
                   height: 40,

                },

                labelStyle:{
                    fontFamily: 'Poppins_600SemiBold',
                    fontSize: 13,
                    marginBottom: 5
                },
              
                inactiveTintColor: '#474553',
                activeTintColor: '#4b97ff',
            }}>
            <Screen 
                name="Lançar" 
                component={Lance}
                options={{
                    tabBarLabel: 'Lançar',
                    tabBarIcon: ({ color, size,  focused }) =>{
                        return(
                            <>
                            
                            <FontAwesome name="gears" size={size} color={focused ? '#4b97ff' : color}/>
                            
                            </>
                        );
                    }
                }}
            />

            <Screen 
                name="Lançados" 
                component={Lanced}
                options={{
                    tabBarLabel: 'Lançados',
                    tabBarIcon: ({ color, size, focused }) =>{
                        return(
                            <FontAwesome name="briefcase" size={size} color={focused ? '#4b97ff' : color}/>
                        );
                    }
                }}
            />  
                
        </Navigator>
    );
}

export default MenuTabsLance;
