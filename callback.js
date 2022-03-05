// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// setInterval(() => {
//     console.log("Her saniye");
// }, 1000);

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log(users);
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((post) => console.log(post));
//     });

// async function getData() {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     console.log("users", users);
//     console.log("post1", post1);
// }

// getData();

// (async () => {
//     const {data : users} = await (
//         axios("https://jsonplaceholder.typicode.com/users")
//     );

//     const  {data : post1} = await (
//         axios("https://jsonplaceholder.typicode.com/posts/1")
//     );

//     console.log("users", users);
//     console.log("post1", post1);
// })();

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        resolve (data);
    });
};

const getPost = (post_id) => {
    return new Promise (async (resolve, reject) =>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)
        resolve (data);
    });
};

(async () => {
    try{
        const users = await getUsers();
        const post1 = await getPost(1);
    
        console.log(users);
        console.log(post1);
    } catch(e){
        console.log(e);
    }
    
})();