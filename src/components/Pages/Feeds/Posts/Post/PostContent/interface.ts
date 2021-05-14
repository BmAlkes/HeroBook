import {Post} from '../../../../../Redux/reducers/postsReducer/interfaces'

export interface PostContentProps{
  content:Post['post']['content']
  image:Post['post']['image'];
}
