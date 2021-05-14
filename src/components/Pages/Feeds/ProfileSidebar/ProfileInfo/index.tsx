import React from 'react'
import Typing from './Typing'
import { useAppSelector } from '../../../../Redux/configureStore'

function ProfileInfo() {
  const user = useAppSelector((state)=>state.myLogin.user)
  const isTyping = useAppSelector((state)=>state.ui.isTyping)
  return (
    <>
    <div className="profile-image">
      {isTyping &&<Typing/>}
    <div className="image-board">
      <img src={user.image} alt="Profile" />
    </div>
  </div>
    <div className="profile-name">
      <span>{user.name}</span>
    </div>
    <div className="profile-stats">
      <div>
        <span>{user.followers}</span>
        <span>Followers</span>
      </div>
      <div>
        <span>{user.following}</span>
        <span>Following</span>
      </div>
    </div>
    </>
  )
}

export default ProfileInfo
