import axios from 'axios';
//getting
export const START_GET_BLOGS = 'START_GET_BLOGS';
export const GET_BLOGS = 'GET_BLOGS';
export const ERROR_GET_BLOGS = 'ERROR_GET_BLOGS';
//posting
export const START_POST_BLOG = 'START_POST_BLOG';
export const POST_BLOG = 'POST_BLOG';
export const ERROR_POST_BLOG = 'ERROR_POST_BLOG';

const token = localStorage.getItem('token');

export const getBlogs = () => async dispatch => {
    dispatch({type: START_GET_BLOGS});
    try {
        const response = await axios.get('http://104.248.25.178:8081/api/blogs', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        dispatch({type: GET_BLOGS, payload: response.data})
    }catch (e) {
        dispatch({type: ERROR_GET_BLOGS, payload: e})
    }
};

export const postBlog = () => dispatch => {

};