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
        marginLeft: 0,
        marginTop: -10
    },

    containerItens:{
        backgroundColor: '#14181C',
        marginTop: 140,
        marginLeft: 20,
        marginBottom: 50
    },

    description:{
        fontFamily: 'Poppins_400Regular',
        color: '#DDD',
        fontSize: 18,
        marginTop: 90,
    },

    button:{
        width:'100%',
        backgroundColor: '#F4F2DA',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    buttontext:{
        fontFamily: 'Raleway_700Bold',
        color: '#14181C',
        fontSize: 16,
    },

    searchForm: {
        marginBottom: 10,
    },

    label: {
        color: '#e7e4bc',
        fontFamily: 'Poppins_400Regular'
    },

    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock:{
        width: '48%',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius:  8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

})

export default styles;