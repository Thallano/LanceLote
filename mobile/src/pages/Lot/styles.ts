import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#14181C',
        justifyContent: 'center',
        flex: 1,
        padding: 40,
        marginTop: -40
    },

    headerColor:{
        color: '#14181C',
        height: 150,
        padding: 40,
        backgroundColor: '#F4F2DA',
    },
    
    content:{
        flex: 1,
        justifyContent: 'center',
    },

    title:{
        fontFamily: 'Raleway_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        marginTop:180,
    },

    containerItens:{
        backgroundColor: '#14181C',
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
        color: '#000',
        fontSize: 16,
    },

    searchForm: {
        marginBottom: 24,
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

    submitButton:{
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText:{
        color: '#FFF',
        fontFamily: 'Raleway_700Bold',
        fontSize: 16
    },
})

export default styles;