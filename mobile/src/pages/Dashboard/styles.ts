import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#14181C',
        justifyContent: 'center',
        flex: 1,
        padding: 40
    },

    containerLogo:{
        backgroundColor: '#14181C',
        justifyContent: 'center',
        flex: 1,
        padding: 40,
        marginTop: "65%"
    },
    
    logoContainer:{
        height: 250,
        width: '100%',
        resizeMode: 'contain'
    },

    buttonsContainer:{
        flexDirection:'row',
        alignSelf: 'flex-start',
        marginBottom: 90
    },

    buttonsContainer2:{
        flexDirection:'row',
        marginBottom: -60,
        marginTop: 140,
        alignSelf: 'flex-end'
    },
    
    button:{
        height: 150,
        width:'48%',
        borderRadius: 12,
        padding: 20,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },

    lanceButtonContainer:{
        backgroundColor: '#FF514B',
        marginTop: -60,
    },

    lotButtonContainer:{
        backgroundColor: '#F4F2DA'
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
        color: '#FF514B',
        fontSize: 18,
        marginRight: 10,
        textAlign: 'right'
    },
}
)

export default styles;