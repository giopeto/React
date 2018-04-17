import React from 'react';

const UserListWithState = ({propPassedAsProp, statePassedAsProp}) => (
    <div>
        <h1>UserListWithState</h1>
        <br/>
        {propPassedAsProp} <br/>
        {statePassedAsProp} <br/>
    </div>
);

export default UserListWithState;