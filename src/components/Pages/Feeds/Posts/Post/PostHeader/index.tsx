import React from 'react';
import {PostHeaderProps} from './interface'

function PostHeader(props:PostHeaderProps) {
  function parseDate(){
    const date = new Date(props.date);
    const formatter = new Intl.DateTimeFormat('en-US',{ day:'2-digit', month:'long', year:'2-digit', hour: '2-digit', minute: '2-digit'} );
    return formatter.format(date)
  }
  return (
    <div className="post-header">
              <div className="post-header-profile-image">
                <div className="post-header-image-board">
                  <img src={props.image} alt="Profile" />
                </div>
              </div>
              <div className="post-header-profile-name">
                <div className="profile-name">{props.name}</div>
                <div className="post-date">{parseDate()}</div>
              </div>
            </div>
  )
}

export default PostHeader;

