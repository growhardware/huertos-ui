import io from './socket';

export const signUp = async (msg, cb) => {
    console.log('MENSANJE ', msg)
    const signupReqOptions = {
        method: 'post',
        url: '/api/v1/entrance/signup',
        data: {
          emailAddress: msg.emailAddress,
          password: msg.password,
          rememberMe: msg.rememberMe,
          fullName: msg.fullName,
        },
        headers: {},
      }
    let res = await io.socket.request(signupReqOptions, cb);
    console.log('el res',res);
    return res;
}
export const signOut = (cb) => {
    const logoutReqOptions = {
        method: 'get',
        url: '/api/v1/account/logout',
        headers: {
        }
    };
    io.socket.request(logoutReqOptions, cb);
}
export const signIn = (credentials, cb) => {
    const loginReqOptions = {
        method: 'put',
        url: '/api/v1/entrance/login',
        data: {
            emailAddress: credentials.email,
            password: credentials.password,
        },
    };
    io.socket.request(loginReqOptions, cb);
}
