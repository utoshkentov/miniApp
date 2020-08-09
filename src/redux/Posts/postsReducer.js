import {GET_POSTS_BEGIN, GET_POSTS_ERROR, GET_POSTS_SUCCESS} from "./postsActions";

const initialState = {
    loading: false,
    error: null,
    posts: []
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.posts
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                posts: []
            };
        default:
            return state
    }
};
