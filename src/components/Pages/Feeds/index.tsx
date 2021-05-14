import React from 'react'
import { Redirect } from 'react-router'
import { useAppSelector } from '../../Redux/configureStore'
import {PATHS} from '../../config/paths'
import Posts from './Posts'
import ProfileSidebar from './ProfileSidebar'

function Feeds() {

  const user = useAppSelector((state)=> state.myLogin.user)

  if(!user){
   return  <Redirect to={PATHS.LOGIN}/>
  }

  return (
   <section className="feed">
     <Posts/>
     <ProfileSidebar/>
   </section>
  )
}

export default Feeds;
