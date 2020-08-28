import React, {useContext }from 'react';
import AuthContext from '../contexts/auth';

import AppRoutes from './AppRoutes';
import AppStack from './AppStack';
import { View, ActivityIndicator } from 'react-native';


const Routes: React.FC = ( ) =>{
    const { signed, loading } = useContext(AuthContext);
    
    return signed ? <AppRoutes />:  <AppStack />;
};

export default Routes;