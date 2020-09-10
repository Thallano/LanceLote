import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#14181C',
        flex: 1,
        alignItems: 'center'
    },
    
    userServicesContainer:{
        backgroundColor: '#474553',
        width: 280,
        alignSelf: 'center',
        borderRadius: 12,
        padding: 10,
        marginBottom: 20
    },
    
    headerService:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    serviceText:{
        fontFamily: 'Raleway_700Bold',
        color: '#f4f2da',
        fontSize: 16,
    },

    descriptionText:{
        fontFamily: 'Poppins_400Regular',
        color: '#b19f81',
        fontSize: 12,
        marginTop: 0,
        textAlign: 'left'
    },
    bottomContainer:{
        backgroundColor: '#393843',
        padding: 10,
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 15
    },

    modalityText:{
        fontFamily: 'Poppins_400Regular',
        color: '#b19f81',
        fontSize: 14,
        marginRight: 40,
    },

    costText:{
        fontFamily: 'Raleway_700Bold',
        color: '#f4f2da',
        fontSize: 16,
    },

})

export default styles;