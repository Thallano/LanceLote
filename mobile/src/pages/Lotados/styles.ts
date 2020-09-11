import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
       
    content:{
        justifyContent: 'center',
    },

    bottomLancersContainer:{
        backgroundColor: '#14181C',
        flex: 1,
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    containerItens:{
        backgroundColor: '#14181C',
        marginTop: 100,
    },
    
    reviewContainer:{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    inputReview: {
        height: 90,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius:  8,
        marginTop: 20,
        paddingHorizontal: 16,
        textAlign: 'left',
        textAlignVertical: 'top',
    },

    rateService:{
        width: 60,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 13,
        marginRight: 10,
    },

    rateContainer:{
        width: 160,
        borderRadius: 15,
        borderWidth: 3,
        backgroundColor: '#F4F2DA',
        borderColor: '#F4F2DA',
        flexDirection: 'row',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 15,
        marginBottom: -50,
    },

    rateContainerIcons:{
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },

    containerRateConfirm:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 320
    },

    iconRateService:{
        alignSelf: 'center',
        padding: 6,
    },

    rateContainerTextNumber:{
        color: '#4b97ff',
        fontFamily: 'Poppins_400Regular',
    },

    userServicesContainer:{
        backgroundColor: '#474553',
        padding: 25,
        width: 280,
        minHeight: 240,
        alignSelf: 'center',
        flexDirection: 'column',
        marginTop: 40,
        marginBottom: 10,
        justifyContent: 'space-between',
        borderRadius: 12,
        borderWidth: 5,
        borderColor: '#434251',
    },

    headerServiceRate:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },  
    
    headerService:{
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    serviceTextRate:{
        fontFamily: 'Poppins_400Regular',
        color: '#f4f2da',
        fontSize: 14,
        marginLeft: 10
    },

    serviceText:{
        fontFamily: 'Raleway_700Bold',
        color: '#f4f2da',
        fontSize: 16,
    },

    serviceTextSubtitle:{
        fontFamily: 'Poppins_400Regular',
        color: '#b19f81',
        fontSize: 14,
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