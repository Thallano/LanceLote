import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
       
    content:{
        justifyContent: 'center',
    },

    title:{
        fontFamily: 'Raleway_700Bold',
        color: '#FFF',
        fontSize: 32,
    },

    lotarLoading:{
        marginTop: "65%",
        elevation: 0
    },

    caseIcon:{
       alignSelf: 'center'
    },
    
    caseText:{
        fontFamily: 'Raleway_700Bold',
        color: '#474553',
        fontSize: 14,
        textAlign: 'center'
    },

    bottomLancersContainer:{
        backgroundColor: '#14181C',
        flex: 1,
        marginLeft: 0,
    },

    containerItens:{
        backgroundColor: '#14181C',
        marginTop: 80,
        marginLeft: 20,
        elevation: 2
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
        elevation: 6,
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