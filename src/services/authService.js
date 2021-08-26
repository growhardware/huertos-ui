import io from './socket';

export const signUp = async (msg, cb) => {
    const signupReqOptions = {
        method: 'post',
        url: '/api/v1/entrance/signup',
        data: {
          emailAddress: msg.emailAddress,
          password: msg.password,
          rememberMe: true,
          fullName: 'fullname',
        },
        headers: {},
      }
    io.socket.request(signupReqOptions, cb);
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
