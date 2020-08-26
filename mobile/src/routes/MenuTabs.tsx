import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons} from '@expo/vector-icons';
import Lance from '../pages/Lance';
import Lot from '../pages/Lot';

const {Navigator, Screen} = createBottomTabNavigator ();


function MenuTabs() {
    return (
        <Navigator 
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 55,
                    backgroundColor: '#3f322c',
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
                   flexDirection: 'column',

                },

                labelStyle:{
                    fontFamily: 'Poppins_600SemiBold',
                    fontSize: 13,
                    marginBottom: 5
                },
                /*inactiveBackgroundColor: '#3f322c',*/
                inactiveBackgroundColor: '#231b18',
                activeBackgroundColor: '#231b18',
                inactiveTintColor: '#4A3B35',
                activeTintColor: '#F1574D',
            }}>
            <Screen 
                name="Lançar" 
                component={Lance}
                options={{
                    tabBarLabel: 'Lançar',
                    tabBarIcon: ({ color, focused }) =>{
                        return(
                            <>
                            
                            <Entypo name="bowl" size={35} color={focused ? '#F1574D' : color}/>
                            
                            </>
                        );
                    }
                }}
            />

            <Screen 
                name="Lotar" 
                component={Lot}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) =>{
                        return(
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color}/>
                        );
                    }
                }}
            />  
                
        </Navigator>
    );
}

export default MenuTabs;
