import React from "react";
import {connect} from 'react-redux';

//loader
import {SolarSystemLoading} from 'react-loadingg';


const BlogList = ({data, errorGetting, startGetting}) => {
    console.log(data, errorGetting, startGetting);

    return (
        <div className='container'>
            {startGetting && <SolarSystemLoading/>}
            {errorGetting ? (
                <div className='text-center text-danger'>
                    There is not any blogs
                </div>
            ) : (
                <div className="row">
                    Posts
                </div>
            )}
        </div>
    )
};

const mapState = state => {
    return {
        startGetting: state.blog.startGetting,
        errorGetting: state.blog.errorGetting,
        data: state.blog.data,
    }
}

export default connect(mapState)(BlogList);