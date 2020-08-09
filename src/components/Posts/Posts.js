import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {getPosts} from "../../redux/Posts/postsActions";

const Posts = ({posts, loading, error, getPosts}) => {

    useEffect(() => {
        getPosts()
    }, [getPosts]);

    if (loading) {
        return <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    }
    if (error) {
        return <div className="alert alert-danger" role="alert">
            Can not get items __---__ {error.message}
        </div>
    }
    return(
        <div className='container'>
            <ul className='list-group'>
                {posts.map(post => {
                    return(
                        <li key={post.id} className='list-group-item d-flex flex-row'>
                            <span>{post.score}</span>
                            <div>
                                <h2>{post.title}</h2>
                                <div>{post.num_comments} comments</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

const mapState = (state) => {
  return{
      posts: state.posts.posts,
      loading: state.posts.loading,
      error: state.posts.error
  }
};

export default connect(mapState, {getPosts})(Posts)