import React from 'react';
import { Item } from './User.styled';

function UserItem(props) {
    const { id, name, email, isGoldClient } = props;

    return (
        <Item>
            <h4>User ID: { id }</h4>

            <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                { name }
                <small style={{ fontSize: '0.95rem', fontWeight: '900', color: '#ff7444' }}>
                    {isGoldClient ? '(Client Gold)' : null}
                </small>
            </span>
            
            <p>{ email }</p>
        </Item>
    );
}

export default UserItem;