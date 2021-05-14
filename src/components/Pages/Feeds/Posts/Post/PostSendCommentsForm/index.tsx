import React, {useState} from 'react';
import { useAppDispatch } from '../../../../../Redux/configureStore';
import { updateTyping } from '../../../../../Redux/reducers/UiReducer';
import { sendPostCommentApi} from '../../../../../Redux/reducers/postCommentReduce/'
import {PostSendCommentFormProps} from './interface'

let timeoutId = null;
function PostSendCommentForm(props: PostSendCommentFormProps) {
  const [comment, setComment] = useState('')
  const dispatch = useAppDispatch();
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setComment(e.target.value)

    dispatch(updateTyping(true));
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeoutId = setTimeout(() => {
      dispatch(updateTyping(false));
    }, 1000);
  }

  function handleKeyPress(event:React.KeyboardEvent<HTMLInputElement>){
    if(event.key === 'Enter'){
      dispatch(sendPostCommentApi(props.post, comment))
    }
  }

  return (
    <div className="post-send-comment">
      <div className="post-send-form">
        <input
          type="text"
          placeholder="Write your comment"
          onChange={handleInput} value={comment} onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default PostSendCommentForm;
