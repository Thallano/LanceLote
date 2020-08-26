import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#14181C',
        justifyContent: 'center',
        flex: 1,
        padding: 40,
    },

    gearIcon:{
        marginTop: 50,
        alignSelf: 'center'
    },
    
    content:{
        justifyContent: 'center',
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
        marginTop: 0,
        justifyContent: 'center',
        alignContent: 'center',
        elevation: 5
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