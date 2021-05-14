import {Post} from '../../../../../Redux/reducers/postsReducer/interfaces'

export interface PostCommentsProps{
  comments: Post['post']['comments']
}