import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import * as ReduxDevToolsExtension from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

import loginReducer from "./reducers/loginReducer";
import postsReducer from  './reducers/postsReducer'
import UiReducer from "./reducers/UiReducer";
import postsCommentReducer from "./reducers/postCommentReduce";


const reducers = {
  
    myLogin:loginReducer,
    posts:postsReducer,
    ui:UiReducer,
    postComments: postsCommentReducer
};

const rootReducer = Redux.combineReducers(reducers);
const middleware = Redux.applyMiddleware(ReduxThunk);
const enhancers = ReduxDevToolsExtension.composeWithDevTools(middleware);
const store = Redux.createStore(rootReducer, enhancers);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: ReactRedux.TypedUseSelectorHook<RootState> =
    ReactRedux.useSelector;

export const useAppDispatch = () => ReactRedux.useDispatch();

export default store;
