import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        padding: 40,
        backgroundColor: '#14181C',
    },

    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title:{
        
        fontFamily: 'Raleway_700Bold',
        color: '#F4F2DA',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40        
    },


});

export default styles;