import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        height: 340,
        width: 280,
        borderWidth: 5,
        borderColor: '#434251',
        borderRadius: 12,
        overflow: 'hidden',
        alignSelf: 'center',
        flexDirection: 'column',
        marginRight: 20,
        marginBottom: 20
    },
    
    upContainer:{
        flex: 1,
        backgroundColor: '#474553',
    },

    profile:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        marginLeft: 10,
    },

    avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#1e1716'
    },

    profileInfo:{
        marginLeft: 16,
    },

    profileRate:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',
        marginRight: 50,
        marginTop: -5
    },

    rateText:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#e0dfc4',
        fontSize: 12,
        marginRight: 20,
        marginLeft: 5,
        alignSelf: 'flex-end',
    },
   
    name:{
        fontFamily: 'Raleway_700Bold',
        color: '#f4f2da',
        fontSize: 20,
        maxWidth: 190,
    },

    service:{
        fontFamily: 'Poppins_400Regular',
        color: '#b19f81',
        fontSize: 13,
    },

    description:{
        fontFamily: 'Poppins_400Regular',
        color: '#b19f81',
        fontSize: 13,
        marginTop: 0,
        padding: 20,
        textAlign: 'justify',
    },

    footer:{
        backgroundColor: '#393843',
        alignItems: 'center',
        padding: 15,
    },

    priceContainer:{
        justifyContent: 'space-evenly',
        flexDirection: 'row',

    },

    modality:{
        fontFamily: 'Poppins_400Regular',
        color: '#b19f81',
        fontSize: 14,
        marginRight: 40,

    },
    
    cost:{
        fontFamily: 'Raleway_700Bold',
        color: '#f4f2da',
        fontSize: 16,
    },

    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    
    loted:{
        backgroundColor: '#1c1b26',
        width: 75,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        flexDirection: 'row',
    },

    lot:{
        backgroundColor: '#2b2a33',
        width: 75,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        flexDirection: 'row',
    },

    lotarTextButton:{
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
        color: '#F4F2DA',
        marginLeft: 10
    },

    contactButton:{
        backgroundColor: '#95f776',
        height: 56,
        width: 160,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    contactButtonText:{
        fontFamily: 'Raleway_700Bold',
        fontSize: 14,
        color: '#14181C',
        marginLeft: 10
        
    },

    whatsappIcon:{
        color: '#14181C',
        marginRight: 5
    },

})

export default styles;