export const postDevice = (api, attributes, cb) => {
    const reqOptions = {
        method: 'post',
        url: '/device',
        data: {
            alias: attributes.alias,
            kind: attributes.kind,
            port: attributes.port
        },
        headers: {}
    }
    api.socket.request(reqOptions, cb);
}

export const handleResponse = (body, JWR)=>{
        if(JWR.statusCode === 200){
             console.log('Created device. ID: ', body.id);
        //     // setState({creating: false});
        //     // props.onCreated();
        }
        else{
           console.log('Error: ', JWR);
        }
    }
    // const handleSubmit=(event)=>{
export const createDevice = (api, msg) => {
    
        console.log('ejecutando...api ', api)
        console.log('ejecutando...msg ', msg)
        const attributes = {
            alias: msg.alias,
            kind: msg.kind,
            port: msg.port,
        };
        postDevice(api, attributes, handleResponse);
        // event.preventDefault();
    }






// import http from '../http-common'

// const getAll = () => {
//   return http.get('/gym')
// }

// const get = (id) => {
//   return http.get(`/gym/${id}`)
// }

// const create = (data) => {
//   console.log(data)
//   return http.post('/gym', data)
// }

// const update = (id, data) => {
//   return http.put(`/gym/${id}`, data)
// }

// const remove = (id) => {
//   return http.delete(`/gym/${id}`)
// }

// const findByName = (name) => {
//   return http.get(`/gym?search=${name}`)
// }

// export default {
//   getAll,
//   get,
//   create,
//   update,
//   remove,
//   findByName,
// }
