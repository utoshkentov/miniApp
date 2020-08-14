import {START_GET_BLOGS, GET_BLOGS, ERROR_GET_BLOGS,START_POST_BLOG, POST_BLOG, ERROR_POST_BLOG} from "./blogAction";


const initialState = {
    //get blogs
    startGetting: false,
    errorGetting: [],
    data: [],
};

export const blogReducer = (state=initialState, action) => {
    switch (action.type) {
        case START_GET_BLOGS:
            return {
                ...state,
                startGetting: true,
            };
        case GET_BLOGS:
            return {
                ...state,
                data: action.payload,
                startGetting: false
            };
        case ERROR_GET_BLOGS:
            return {
                ...state,
                data: [],
                startGetting: false,
                errorGetting: action.payload
            };
        case START_POST_BLOG:
            return {
                ...state
            };
        case POST_BLOG:
            return {
                ...state
            };
        case ERROR_POST_BLOG:
            return {
                ...state
            };
        default:
            return state
    }
};