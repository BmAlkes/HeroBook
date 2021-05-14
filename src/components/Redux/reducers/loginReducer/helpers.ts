import {User} from './interfaces'


export function parseUser(githubUser:any):User {
  return{
    id:githubUser.id,
    name:githubUser.login,
    image:githubUser.avatar_url,
    followers:githubUser.followers, 
    following:githubUser.following
  }
}