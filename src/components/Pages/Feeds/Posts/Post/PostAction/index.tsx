import React from 'react';
import { ReactComponent as Likes } from '../../../../../../assets/img/like.svg';
import { ReactComponent as Comments } from '../../../../../../assets/img/comment.svg';
import { PostActionProps } from './interface';

function PostAction(props: PostActionProps) {
  return (
    <div className="post-action">
      <div className="post-like-icon liked">
        <Likes />
        <span>{props.likes} likes</span>
      </div>
      <div className="post-comment-icon commented">
        <Comments />
        <span>{props.comments.length} Comments</span>
      </div>
    </div>
  );
}

export default PostAction;
