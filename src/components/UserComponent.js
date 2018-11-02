import React, { Component } from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            error: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/clients')
            .then(result => result.json())
            .then(userList => {
                console.log('liste ')
                console.log(userList)
                this.setState({ users: userList })
            },
                (err) => {
                    this.setState({ error: err })
                })
    }

    render() {
        return (
            <div className="users-listing">
                <h1>users list</h1>
                <ul>
                    {this.state.users.map((user) => (
                        <li key={user._id}>
                            {user.nom} {user.prenom}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Users;