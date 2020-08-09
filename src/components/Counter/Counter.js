import React from 'react';
import {connect} from 'react-redux';
import './Counter.css';
import {Decrement, Increment} from "../../redux/Counter/counterActions";

const Counter = ({count, Increment, Decrement}) => {

    const decrement = () => {
        Decrement()
    };

    const increment = () => {
        Increment()
    };

    return (
        <div className='counter'>
            <h2>Counter</h2>
            <div className='group-count'>
                <button onClick={decrement}>-</button>
                <span className="count">
                    {count}
                </span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return{
        count: state.count.count
    }
};


const mapDispatch = (dispatch) => {
    return {
        Increment: () => dispatch(Increment()),
        Decrement: () => dispatch(Decrement())
    }
};

export default connect(mapState, mapDispatch)(Counter);
