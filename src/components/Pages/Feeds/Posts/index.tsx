import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Redux/configureStore';
import { getPostsApi } from '../../../Redux/reducers/postsReducer';
import Post from './Post';

function Posts() {
  const dispatch = useAppDispatch();
  const postsState = useAppSelector((state)=>state.posts)
  console.log(postsState)
  useEffect(() => {
    dispatch(getPostsApi());
  }, [dispatch]);
  return (
    <div className="posts">
      <div className="container">
        {postsState.status === 'loading' && <h1>Loading...</h1>}
        {postsState.status === 'error' && <h1>Error...</h1>}
        {postsState.posts.map((post)=>{
           return <Post key={post.id} post={post}/>
        })}
      </div>
    </div>
  );
}

export default Posts;
