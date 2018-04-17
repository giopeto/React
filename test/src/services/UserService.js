const ALL_USERS = [
    {id: 1, name: 'ADMIN 1', type: 'ADMIN'},
    {id: 2, name: 'ADMIN 2', type: 'ADMIN'},
    {id: 3, name: 'ADMIN 3', type: 'ADMIN'},
    {id: 4, name: 'ADMIN 4', type: 'ADMIN'},
    {id: 5, name: 'ADMIN 5', type: 'ADMIN'},
    {id: 6, name: 'ADMIN 6', type: 'ADMIN'},
    {id: 7, name: 'User 7', type: 'USER'},
    {id: 8, name: 'User 8', type: 'USER'},
    {id: 9, name: 'User 9', type: 'USER'},
    {id: 10, name: 'User 10', type: 'USER'},
    {id: 11, name: 'User 11', type: 'USER'},

];


export const getAllUsers = () => Promise.resolve(ALL_USERS);