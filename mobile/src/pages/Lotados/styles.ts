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

    rateService:{
        width: 60,
        height: 200,
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
    },
})

export default styles;