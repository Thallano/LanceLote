import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerTotal:{
        backgroundColor: '#14181C',
        flex: 1,
        alignItems: 'center'
    },

    avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#1e1716'
    },

    container:{
        backgroundColor: '#14181C',
        flex: 1,
        alignItems: 'center'
    }, 

    header:{
        marginTop: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    reviewContainer:{
        marginTop: 20,
        marginBottom: 190,
        flex: 1
    },

    bottomContainerTotal:{
        flex: 1,
        padding: 10,
    },

    flatlistContainer:{
    
    },

    image:{
        borderRadius: 32,
        height: 100,
        width: '40%',
        resizeMode: 'contain',
    },

    userName:{
        fontFamily: 'Raleway_900Black',
        color: '#F4F2DA',
        fontSize: 18,
        marginTop: -120,
        marginBottom: 100,
        backgroundColor: '#14181C',
        width: 200,
        height: 30,
        textAlign: 'center',
        alignSelf: 'center'
    },

    iconEditBio:{
        alignSelf: 'flex-end',
    },

    bio:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#F4F2DA',
        fontSize: 14,
        textAlign: 'center',
        padding: 20
    },
    
    inputLinks:{ 
        height: 52,
        width: "80%",
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius:  8,
        marginTop: 4,
        marginBottom: 16,
        textAlign: 'left',
        textAlignVertical: 'top',
    },
      
    footer:{
        borderRadius: 10,
        borderColor: '#F4F2DA',
        borderWidth: 1,
        padding: 5,
        alignSelf: 'center',
        maxWidth: 280,
        marginTop: 10,
    },

    footerContacts:{
        width: "90%",
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 35
    },
    

})

export default styles;