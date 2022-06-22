import React, { Component } from 'react';
import UserItem from './UserItem';
import { Container, Wrapper } from './User.styled';

class UserList extends Component {
    // obtinem props-urile pentru users
    // const { users } = props;
    constructor(props) {
        super(props); // in cazul in care constructorul primeste parametri, trebuie si super sa primeasca paremetrii
        this.state = {}
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center', margin: '0', padding: '40px 0' }}>Lista utilizatori:</h1>
                <Container>
                    <Wrapper>
                    {
                        // mapam userii pentru a-i putea afisa pe ecrans
                        this.props.users.map((user, idx) => {
                            return (
                                <UserItem 
                                    id={user.id}
                                    name={user.name}
                                    email={user.email}
                                    isGoldClient={user.isGoldClient}
                                    key={idx}
                                />
                            );
                        })
                    }
                    </Wrapper>
                </Container>
            </>
        );
    }
}

export default UserList;