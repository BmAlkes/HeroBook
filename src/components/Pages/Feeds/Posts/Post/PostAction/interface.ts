import { Post }from '../../../../../Redux/reducers/postsReducer/interfaces'

export interface PostActionProps{
  likes:Post['post']['likes'];
  comments:Post['post']['comments'];
}