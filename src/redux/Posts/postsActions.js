export const GET_POSTS_BEGIN = 'GET_POSTS_BEGIN';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

export const getPosts = () => dispatch => {
  dispatch({type: GET_POSTS_BEGIN});
  fetch('https://www.reddit.com/r/reactjs.json')
      .then(res => res.json())
      .then(json => {
          dispatch({
              type: GET_POSTS_SUCCESS,
              posts: json.data.children.map(c => c.data)
          })
      })
      .catch(err => {
          dispatch({type: GET_POSTS_ERROR, err})
      })
};