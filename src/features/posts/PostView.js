import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <section>
                {posts && posts.map((post) => {
                    return <article>
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </article>
                })}
            </section>
        </div>
    );
};

export default PostView;