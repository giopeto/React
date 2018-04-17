import React from 'react';




const UserList = ({showUsersByType, limit, users, isReady, usersLength}) => (
    <div>
        <h1>UserList</h1>
        <br/>
        showUsersByType: {showUsersByType} <br/>
        limit: {limit} <br/>
        isReady: {isReady} <br />
        usersLength: {usersLength} <br />

       {/* {users.map(row =>
            <pre>{row.name}</pre>
        )}*/}


    </div>
);

export default UserList;