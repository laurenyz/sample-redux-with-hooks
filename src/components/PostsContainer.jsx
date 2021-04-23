import React from 'react'
import PostCard from './PostCard'
import NewPostForm from './NewPostForm'

const PostsContainer = () => {
    return (
        <div>
            <NewPostForm />
            <h2>Posts:</h2>
        </div>
    )
}

export default PostsContainer