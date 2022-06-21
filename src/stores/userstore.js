import { writable } from 'svelte/store';
import { browser } from '$app/env'

export const user = writable([]);

export const userName = writable(
	browser && (sessionStorage.getItem('userName'))
)
userName.subscribe((val) => browser && (sessionStorage.userName = val));

export const lIn = writable();
lIn.subscribe( (value) => browser && (sessionStorage.lIn = value));
// export const login = async (data) => {
// 	const response = await fetch('http://localhost:1337/api/v1/entrance/login', {
// 		method: 'PUT', 
// 		// mode: 'no-cors',
// 		// redirect: 'follow',
// 		// referrerPolicy: 'no-referrer',
// 		// credentials: 'same-origin', // include, *same-origin, omit
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*',
		
// 		// 'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		body: JSON.stringify(data)
// 	});
//   	// waits until the request completes...
// 	console.log(response);
// 	// return response.json();
// }

// export const signUp = async () => {
// 	if (loggedIn) return;
// 	const url = `http://localhost:1337/`;
// 	const res = await fetch(url);
// 	const data = await res.json();
// 	console.log(data);
// 	const loadedUser = data.results.map((data, index) => ({
// 		name: data.name,
// 		id: index + 1,
// 		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
// 			index + 1
// 		}.png`
// 	}));
// 	user.set(loadedUser);
// };

