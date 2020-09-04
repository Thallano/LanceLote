import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        padding: 40,
        backgroundColor: '#4b97ff', 
        justifyContent: 'space-between',
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        elevation: 4,
        marginBottom: -80,
        marginTop: -30
    },

    Arrow:{
        marginTop: 15,
        marginBottom: -10
    },
    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginTop: 35,
        marginBottom: 5
    },

    title:{
        fontFamily: 'Raleway_700Bold',
        color: '#F4F2DA',
        fontSize: 24,
        marginRight: 10,
        lineHeight: 32,
        maxWidth: 190,
    },

    subtitleContainer:{
        
    },

    subtitle:{
        fontFamily: 'Poppins_400Regular',
        color: '#f4f2da',
        fontSize: 13,
        marginRight: 10,
        marginTop: 5,
    },

});

export default styles;