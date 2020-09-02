import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    removeService:{
        
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 13,
        marginRight: 10,
        marginTop: "100%"
    },

    iconServiceRemove:{
        alignSelf: 'center',
        padding: 6
    },
    
    container:{
        backgroundColor: '#14181C',
        flex: 1,
        padding: 40,
    },

    searchForm: {
        marginTop: 45,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
       
    },

    inputSearchFormContainer:{
        padding: 10,
    },

    label: {
        color: '#e7e4bc',
        fontFamily: 'Poppins_400Regular'
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius:  8,
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    buttonLanceContainer:{

    },

    buttonLance:{
        backgroundColor: '#F4F2DA',
        borderRadius: 8,
        padding: 15,
        marginTop: 10
    },

    flatListContainer:{
        backgroundColor: '#14181C',
        fontFamily: 'Raleway_700Bold',
        color: '#14181C',
        fontSize: 16,
        marginBottom: -50
    },   
    
    userServicesContainer:{
        backgroundColor: '#474553',
        padding: 10,
        width: 280,
        minHeight: 140,
        alignSelf: 'center',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'space-between',
        borderRadius: 12
    },
    
    headerService:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    serviceText:{
        fontFamily: 'Raleway_700Bold',
        color: '#f4f2da',
        fontSize: 20,
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


    /*editService:{
        width: 60,
        marginTop: 80,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 13,
        marginRight: 10,
    },

    iconRateService:{
        alignSelf: 'center',
        padding: 6
    },*/

})

export default styles;