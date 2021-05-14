import React from 'react';
import { PostProps } from './interfaces';
import PostAction from './PostAction';
import PostComments from './PostComments';
import PostContent from './PostContent';
import PostHeader from './PostHeader';
import PostSendCommentForm from './PostSendCommentsForm';

function Post(props:PostProps) {
  console.log(props)
  return (
    <div className="post">
      <PostHeader name={props.post.author.name} image={props.post.author.image} date={props.post.post.date} />
      <PostContent content={props.post.post.content} image={props.post.post.image}/>
      <PostAction likes={props.post.post.likes} comments={props.post.post.comments}/>
      <PostComments comments={props.post.post.comments}/>
      <PostSendCommentForm post={props.post}/>
    </div>
  );
}

export default Post;

