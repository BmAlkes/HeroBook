import {RootState} from '../../configureStore'
import { PostCommentsState } from './interfaces';
import {Post} from '../postsReducer/interfaces'
// import {parseUser} from './helpers'
import postCommentsApi from './api';
import { createComment } from '../postsReducer/helpers';


 export const POSTS_COMMENTS_ACTION_TYPES = {
  SEND_COMMENT: `@postsCommentsReducer/SEND_COMMENT`,
  SEND_COMMENT_SUCESS: `@postsCommentsReducer/SEND_COMMENT_SUCESS`,
  SEND_COMMENT_ERROR: `@postsCommentsReducer/SEND_COMMENT_ERROR`,
};

const INIT_STATE: PostCommentsState = {
  status: 'idle',
};

export default function postsCommentReducer(
  state = INIT_STATE,
  action
): PostCommentsState {
  switch (action.type) {
    case POSTS_COMMENTS_ACTION_TYPES.SEND_COMMENT: {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    case POSTS_COMMENTS_ACTION_TYPES.SEND_COMMENT_SUCESS: {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    case POSTS_COMMENTS_ACTION_TYPES.SEND_COMMENT_ERROR: {
      return {
        ...state,
        status: action.payload.status,
      };
    }

    default:
      return state;
  }
}

export function sendPostCommentApi(post:Post, comment:string) {
  return async (dispatch, getState) => {
    try {
      dispatch(sendComments);
      const state:RootState = getState();
     const newComment = createComment(state.myLogin.user, comment)
      const newPost ={...post}
      newPost.post.comments.push(newComment)
      const newPostsResponse = await postCommentsApi.sendComments(newPost);
     
  
      dispatch(sendCommentsSucess(newPostsResponse));
    } catch (e) {
      dispatch(sendCommentsErros());
    }
  };
}

export function sendComments() {
  return {
    type: POSTS_COMMENTS_ACTION_TYPES.SEND_COMMENT,
    payload: {
      status: 'loading',
    },
  };
}

export function sendCommentsSucess(post: Post) {
  return {
    type: POSTS_COMMENTS_ACTION_TYPES.SEND_COMMENT_SUCESS,
    payload: {
      status: 'success',
      post,
    },
  };
}
export function sendCommentsErros() {
  return {
    type: POSTS_COMMENTS_ACTION_TYPES.SEND_COMMENT_ERROR,
    payload: {
      status: 'error',
    },
  };
}
