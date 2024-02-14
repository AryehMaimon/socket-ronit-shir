import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://10.0.1.59:4545';

// socket.on("connect" ,(y)=>{
//    console.log("connect");
// })

export const socket = io( 'http://10.0.1.39:3000');

