import React from 'react';
import { Container } from './Post.styled';
import PostItem from './PostItem';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center', margin: '0', padding: '40px 0' }}>Lista articole</h1>
                <Container>
                    {
                        this.props.posts.map((post, idx) => {
                            return (
                                <PostItem 
                                    title={post.title} 
                                    description={post.body}
                                    key={idx}
                                />
                            );
                        })
                    }
                </Container>
            </>
        );
    }
}

export default PostList;