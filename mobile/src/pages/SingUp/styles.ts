import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    searchForm: {
        flex: 1,
        backgroundColor: '#14181C'
    },

    singUpTittleText:{
        fontFamily: 'Raleway_900Black',
        color: '#F4F2DA',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
        fontSize: 25
    },
    
    content:{
        justifyContent: 'center',
    },

    label: {
        color: '#e7e4bc',
        fontFamily: 'Poppins_400Regular'
    },

    inputGroup:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    inputBlock:{
        width: '65%',
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

    title:{
        fontFamily: 'Raleway_700Bold',
        color: '#FFF',
        fontSize: 32,
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
  
    submitButton:{
        width:'65%',
        marginTop: 20,
        backgroundColor: '#F4F2DA',
        borderRadius: 8,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    submitButtonText:{
        fontFamily: 'Raleway_700Bold',
        color: '#14181C',
        fontSize: 16,
    },
}
)

export default styles;