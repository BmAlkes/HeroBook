import React from 'react';
import {PostContentProps} from './interface'

function PostContent(props:PostContentProps) {
  return (
    <>
    <div className="post-content">
    {props.content}
  </div>
  <div className="post-image">
    <div className="post-image-board">
      <img src={props.image} alt="Post" />
    </div>
  </div>
  </>
  )
}

export default PostContent;



