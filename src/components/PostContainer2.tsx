import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import '../App.css'

const PostContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
    return (
        <div className='post__list'>
            {isLoading && 'Loading'}
            {error && 'Error occurred'}
            {/*{posts && posts.map(post =>*/}
            {/*    <PostItem key={post.id} post={post}/>*/}
            {/*)}*/}
        </div>
    );
};

export default PostContainer2;