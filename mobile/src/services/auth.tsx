interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn( ): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(( ) => {
            resolve({
            token: 'aosihdjasdmaskldmaskdasidjmasidasasdsad',
            user: {
                name: 'Cristyan',
                email: 'cristyan@lancelot.com.br'
            }, 
        });
        }, 1000);
    });
}