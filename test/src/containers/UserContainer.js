import React from 'react';
import UserList from "../components/UserList";
import {getAllUsers} from "../services/UserService";



class UserContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {users: [], isReady: false};
        console.log('UserContainer constructor props: ', props);
    }

    componentDidMount() {
        getAllUsers().then((response) => {
            console.log(response);
            this.setState({users: response, isReady: true});
        });
    }

    render() {

        const stringProps = JSON.stringify(this.props);
        const stringState = JSON.stringify(this.state);

        return (
            <div>
                <UserList {...this.props} {...this.state} usersLength={this.state.users.length}/>
                <br/><br/><br/><br/>
                <pre>{stringProps}</pre>
                <pre>{stringState}</pre>
            </div>
        );
    }

};

export default UserContainer;