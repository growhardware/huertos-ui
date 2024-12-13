import io from './socket';

export const postDevice = (attributes, cb) => {
  const reqOptions = {
    method: 'post',
    url: '/device',
    data: {
      alias: attributes.alias,
      kind: attributes.kind,
      port: attributes.port,
      // status: { test: 'test' } || {},
    },
    headers: {},
  };
  io.socket.request(reqOptions, cb);
  // io.socket.post('device', attributes, cb);
};

export const handleResponse = (body, JWR) => {
  console.log('body ', body);
  if (JWR.statusCode === 200) {
    console.log('Created device. ID: ', body.id);
    //     // setState({creating: false});
    //     // props.onCreated();
  } else {
    console.log('Error: ', JWR);
  }
};
// const handleSubmit=(event)=>{
export const createDevice = (msg) => {
  console.log('ejecutando...io ', io);
  console.log('ejecutando...msg ', msg);
  const attributes = {
    alias: msg.alias,
    kind: msg.kind,
    port: msg.port,
    status: {},
    settings: {},
  };
  postDevice(attributes, handleResponse);
  // event.preventDefault();
};

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
