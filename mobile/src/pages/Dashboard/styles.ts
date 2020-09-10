import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#14181C',
        justifyContent: 'center',
        flex: 1,
        padding: 40
    },

    logoutButton:{
        marginTop: 150,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',     
    },

    profileContainer:{
        borderRadius: 12,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#95F776',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    userIDText:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#F4F2DA',
        fontSize: 18,
        textAlign: 'center',
    },

    headerIntro:{
        justifyContent: 'space-between',
    },
    
    coffee:{ 
        color: '#95F776',
    },

    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#F4F2DA',
        fontSize: 20,
        textAlign: 'center',
    },
     
    title:{
        fontFamily: 'Poppins_400Regular',
        color: '#F4F2DA',
        fontSize: 12,
    },

    containerLogo:{
        padding: 10,
    },
    
    logoContainer:{
        height: 100,
        width: '40%',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20
    },

    buttonsContainerLot:{
        flexDirection:'row',
        alignSelf: 'flex-start',
        marginBottom: 100,
        /*transform: [{ rotate: '15deg'}],*/
    },

    buttonsContainerLance:{
        flexDirection:'row',
        marginBottom: -60,
        marginTop: 90,
        alignSelf: 'flex-end',
        /*transform: [{ rotate: '15deg'}],*/
    },
    
    button:{
        height: 150,
        width:'48%',
        borderRadius: 12,
        padding: 20,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },

    lanceButtonContainer:{
        backgroundColor: '#4b97ff',
        marginTop: -60,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 60
    },

    lotButtonContainer:{
        backgroundColor: '#F4F2DA',
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 40
    },

    lanceServiceTextButton:{
        fontFamily: 'Raleway_900Black',
        color: '#F4F2DA',
        fontSize: 18,
        marginRight: 10,
        textAlign: 'left'
    },

    lotServiceTextButton:{
        fontFamily: 'Raleway_900Black',
        color: '#4b97ff',
        fontSize: 18,
        marginRight: 10,
        textAlign: 'right'
    },

    logonContainer:{
        backgroundColor: '#474553',
        borderTopRightRadius: 15,
        height: 75,
        marginTop: -140,
        width: "48%",
        alignSelf: 'flex-end',
        justifyContent: 'space-between',

    },

    logonButtonContainer:{
        color: '#4b97ff',
        fontSize: 18,
        marginRight: 10,
    },

    logonServiceTextButton:{
        fontFamily: 'Raleway_900Black',
        color: '#4b97ff',
        fontSize: 18,
        marginRight: 10,
        textAlign: 'center',
    },
}
)

export default styles;