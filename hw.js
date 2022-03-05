import axios from "axios";

const getUser = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        resolve(data);
        reject("User Not Found!")
    });
};

const getPost = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)
        resolve(data);
        reject("Post Not Found!")
    });
};

function getUserDetails(user_id) {(async () => {
    try {
        const user = await getUser(user_id);
        const post = await getPost(user_id);

        console.log(user , post);
    } catch (e) {
        console.log(e);
    }

})()};

export default { getUserDetails };