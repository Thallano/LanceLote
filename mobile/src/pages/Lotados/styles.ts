import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
       
    content:{
        justifyContent: 'center',
    },

    title:{
        fontFamily: 'Raleway_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
    },

    bottomLancersContainer:{
        backgroundColor: '#14181C',
        flex: 1,
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerItens:{
        backgroundColor: '#14181C',
        marginTop: 100,
    },

    label: {
        color: '#e7e4bc',
        fontFamily: 'Poppins_400Regular',
    },

    removeService:{
        backgroundColor: '#4b97ff',
        width: 60,
        height: 130,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 13,
        marginRight: 10,
        marginTop: 80
    },

    iconServiceRemove:{
        alignSelf: 'center',
        padding: 6
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
        backgroundColor: '#F4F2DA',
        width: 160,
        borderRadius: 12,
        flexDirection: 'row',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 15,
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
    },

    iconRateService:{
        alignSelf: 'center',
        padding: 6
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
        borderRadius: 12
    },
    headerServiceRate:{
        flexDirection: 'row',
        marginBottom: 5
    },  
    
    headerService:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    serviceTextRate:{
        fontFamily: 'Poppins_400Regular',
        color: '#f4f2da',
        fontSize: 14,
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