import {RootState} from '../../configureStore'

export function createComment(user:RootState['myLogin']['user'], comment: string){
  const {image, name} = user
  const id = Math.floor(Math.random()*999).toString()
  const newComment = {
    id:id,
    image:image,
    name:name,
    comment: comment,

  }
  return newComment
}