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
    
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: -5,
    },

    title:{
        
        fontFamily: 'Raleway_700Bold',
        color: '#F4F2DA',
        fontSize: 24,
        marginRight: 10,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40        
    },


});

export default styles;