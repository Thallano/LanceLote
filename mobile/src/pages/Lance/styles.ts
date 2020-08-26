import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#14181C',
        justifyContent: 'center',
        flex: 1,
        padding: 40
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

    description:{
        fontFamily: 'Poppins_400Regular',
        color: '#DDD',
        fontSize: 18,
        marginTop: 90,
    },

    button:{
        width:'100%',
        backgroundColor: '#04d361',
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
})

export default styles;