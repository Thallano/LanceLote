
interface Response {
    token: string;
    user: {
        password: string;
        email: string;
    };
}

export function signIn( ): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(( ) => {
            resolve({
            token: 'aosihdjasdmaskldmaskdasidjmasidasasdsad',
            user: {
                password:'',
                email: ''
            }, 
        });
        });
    });
}