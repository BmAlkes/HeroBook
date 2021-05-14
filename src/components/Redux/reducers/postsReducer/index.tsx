import {Post, PostState} from "./interfaces";
// import {parseUser} from './helpers'
import postsApi from './api'
import {POSTS_COMMENTS_ACTION_TYPES} from '../postCommentReduce'

const POSTS_ACTION_TYPES = {
    GET_POSTS: `@postsReducer/GET_POSTS`,
    GET_POSTS_SUCESS: `@postsReducer/GET_POSTS_SUCESS`,
    GET_POSTS_ERROR: `@postsReducer/GET_POSTS_ERROR`,
    
};

const INIT_STATE: PostState = {
    status: "idle",
    posts:[],
};

export default function postsReducer(state = INIT_STATE, action): PostState {
    switch (action.type) {
        case POSTS_ACTION_TYPES.GET_POSTS: {
            return {
                ...state,
                status: action.payload.status,
                posts: action.payload.posts,
            };
        }
        case POSTS_ACTION_TYPES.GET_POSTS_SUCESS: {
            return {
                ...state,
                status: action.payload.status,
                posts: action.payload.posts,
            };
        }
        case POSTS_ACTION_TYPES.GET_POSTS_ERROR: {
            return {
                ...state,
                status: action.payload.status,
                posts: action.payload.posts,
            };
        }

        case POSTS_COMMENTS_ACTION_TYPES.SEND_COMMENT_SUCESS :{
          const newPost =state.posts.map((post) =>{
            if(post.id === action.payload.post.id){
              return action.payload.post
            }
            return post;
          })
          return {
            ...state,
            posts:newPost,
          }
        }

        default:
            return state;
    }
}

export function getPostsApi() {
    return async (dispatch) => {
        try {
            dispatch(getPosts);
           const posts = await postsApi.getPosts()
             dispatch(getPostsSucess(posts));
        } catch (e) {
            dispatch(getPostsErros());
        }
    };
} 

export function getPosts() {
    return {
        type:POSTS_ACTION_TYPES.GET_POSTS,
        payload: {
            status: "loading",
            posts: [],
        },
    };
}

export function getPostsSucess(posts: Post[]) {
    return {
        type: POSTS_ACTION_TYPES.GET_POSTS_SUCESS,
        payload: {
            status: "success",
            posts: posts,
        },
    };
}
export function getPostsErros() {
    return {
        type: POSTS_ACTION_TYPES.GET_POSTS_ERROR,
        payload: {
            status: "error",
           posts:null
        },
    };
}


