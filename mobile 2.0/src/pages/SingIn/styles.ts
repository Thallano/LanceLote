import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 

    loginForm: {
        flex: 1,
        backgroundColor: '#14181C',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerLogo:{
        backgroundColor: '#14181C',
        justifyContent: 'center',
    },
    
    logoContainer:{
        marginTop: 20,
        height: 120,
        width: '98%',
        resizeMode: 'contain',
        padding: 80,
    },
   
    label: {
        color: '#e7e4bc',
        fontFamily: 'Poppins_400Regular'
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

    singInsingUpContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    loginButton:{
        width: 54,
        height: 54,
        backgroundColor: '#95f776',
        borderRadius: 8,
        padding: 15,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignSelf: 'flex-end'   
    },

    loginButtonText:{
        fontFamily: 'Raleway_700Bold',
        color: '#14181C',
        fontSize: 16,
    },

    textSingUp:{
        fontFamily: 'Poppins_400Regular',
        color: '#F4F2DA',
        textAlign: 'center',
        marginTop: 90,
        marginBottom: 10,
        fontSize: 14
    },

    textSingUpLink:{
        fontFamily: 'Poppins_400Regular',
        color: '#4b97ff',
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 15
    },

    forgotPassword:{
        fontFamily: 'Poppins_400Regular',
        color: '#F4F2DA',
        alignSelf: 'flex-start',
        marginLeft: 45,
        textAlign: 'right',
        marginBottom: 20,
        fontSize: 12
    },

    forgotPasswordLink:{
        fontFamily: 'Poppins_400Regular',
        color: '#4b97ff',
        textAlign: 'right',
        marginBottom: 20,
        fontSize: 13
    },
}
)

export default styles;