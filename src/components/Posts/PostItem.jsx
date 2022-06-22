import React from 'react';
import { PostItems } from './Post.styled';

function PostItem(props) {

    const { title, description } = props;

    return (
        <PostItems>
            <h4 style={{ fontSize: '1.2rem' }}>{ title }</h4>
            <p style={{ marginTop: '-10px', fontStyle: 'italic'}}>{ description }</p>
        </PostItems>
    );
}

export default PostItem;