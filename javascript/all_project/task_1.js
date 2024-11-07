// Задание 12: кто старше?
function getOlderUser(user1, user2) {
    return user1.age > user2.age ? user1.name : user2.name;
}

let user1 = {
    name: 'Игорь',
    age: 17
};
let user2 = {
    name: 'Оля',
    age: 21
};

let result = getOlderUser(user1, user2);
console.log(result);


// Задание 13: кто старше в массиве
function getOlderUserArray(users) {
    return users.reduce((oldest, user) => {
        return user.age > oldest.age ? user : oldest;
    }).name;
}

let allUsers = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
];


let res = getOlderUserArray(allUsers);
console.log(res);
