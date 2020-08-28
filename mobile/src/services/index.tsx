export default function signIn( ){
    return new Promise(resolve => {
        setTimeout(( ) => {
            resolve({
            token: 'aosihdjasdmaskldmaskdasidjmasidasasdsad',
            user: {
                name: 'Cristyan',
                email: 'cristyan@lancelot.com.br'
            }, 
        });
        }, 1500);
    });
}