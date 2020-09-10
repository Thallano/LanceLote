import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerTotal:{
        backgroundColor: '#14181C',
        flex: 1,
        alignItems: 'center'
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
        marginTop: 20,
        backgroundColor: '#14181C',
        elevation: 3,
        width: 200,
        height: 30,
        textAlign: 'center'
    },
    iconEditBio:{
        alignSelf: 'flex-end',
    },

    bio:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#F4F2DA',
        fontSize: 14,
        textAlign: 'justify',
        padding: 20
    },

    footer:{
        borderRadius: 10,
        borderColor: '#F4F2DA',
        borderWidth: 1,
        padding: 5,
        alignSelf: 'center',
        maxWidth: 280,
        marginTop: -10,
        backgroundColor: '#474553'
    },

    footerContacts:{
        width: "35%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    

})

export default styles;