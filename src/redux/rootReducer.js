import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
//reducers
import {counterReducer} from "./Counter/counterReducer";
import {itemAddReducer} from "./ItemAdd/itemAddReducer";
import {postsReducer} from "./Posts/postsReducer";
import {authReducer} from "./Auth/authReducer";
import {blogReducer} from "./Blog/blogReducer";

const persistConfig = {
   key: 'root',
   storage
};

const rootReducer = combineReducers({
   count: counterReducer,
   items: itemAddReducer,
   posts: postsReducer,
   auth: authReducer,
   blog: blogReducer
});

export default persistReducer(persistConfig, rootReducer);