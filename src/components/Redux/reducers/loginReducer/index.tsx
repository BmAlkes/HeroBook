import { User, LoginState} from "./interfaces";
import {parseUser} from './helpers'
import loginApi from './api'

const LOGIN_ACTION_TYPES = {
    GET_GITHUB_USER: `@loginReducer/GET_GITHUB`,
    GET_GITHUB_USER_SUCESS: `@loginReducer/GET_GITHUB_USER_SUCESS`,
    GET_GITHUB_USER_ERROR: `@loginReducer/GET_GITHUB_USER_ERROR`,
    CLEAR_GITHUB_USER: `@loginReducer/CLEAR_GITHUB_USER`,
};

const INIT_STATE: LoginState = {
    status: "idle",
    user: null,
};

export default function loginReducer(state = INIT_STATE, action): LoginState {
    switch (action.type) {
        case LOGIN_ACTION_TYPES.GET_GITHUB_USER: {
            return {
                ...state,
                status: action.payload.status,
                user: action.payload.user,
            };
        }
        case LOGIN_ACTION_TYPES.GET_GITHUB_USER_SUCESS: {
            return {
                ...state,
                status: action.payload.status,
                user: action.payload.user,
            };
        }
        case LOGIN_ACTION_TYPES.GET_GITHUB_USER_ERROR: {
            return {
                ...state,
                status: action.payload.status,
                user: action.payload.user,
            };
        }
        case LOGIN_ACTION_TYPES.CLEAR_GITHUB_USER:{
          return{
            ...state,
            user:INIT_STATE.user
          }
        }

        default:
            return state;
    }
}

export function getGitHubUserApi(username:string) {
    return async (dispatch) => {
        try {
            const getGitHubUserAction = getGitHubUser();
            dispatch(getGitHubUserAction);

           const githubUser = await loginApi.getUserGithub(username)
           if(githubUser.login){
            const user = parseUser(githubUser)
             const getHeroesSucessAction = getGitHubUserSucess(user);
             dispatch(getHeroesSucessAction);

           }else{
             throw Error('User Not Found')
           }
        } catch (e) {
            const getGitHubUserErrorAction = getGitHubUserError();
            dispatch(getGitHubUserErrorAction);
        }
    };
} 

export function getGitHubUser() {
    return {
        type:LOGIN_ACTION_TYPES.GET_GITHUB_USER,
        payload: {
            status: "loading",
            user: null,
        },
    };
}

export function getGitHubUserSucess(user: User) {
    return {
        type: LOGIN_ACTION_TYPES.GET_GITHUB_USER_SUCESS,
        payload: {
            status: "success",
            user:user,
        },
    };
}
export function getGitHubUserError() {
    return {
        type: LOGIN_ACTION_TYPES.GET_GITHUB_USER_ERROR,
        payload: {
            status: "error",
           user:null
        },
    };
}

export function cleanGitHubUser(){
  return {
    type:LOGIN_ACTION_TYPES.CLEAR_GITHUB_USER
  }
}
