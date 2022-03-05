const users = [
    {
    name: "Melih"
}, 
{
    name: "Burak"
}, 
{
    name: "Mert"
}
];

/*
push
map
find
filter
some
every
includes
*/

// users.push("Sercan");
// console.log(users);

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

users.map((user) => {
    console.log(user);
})
console.log("************");

const result = users.find((user) => user.name === "Melih")
console.log(result);