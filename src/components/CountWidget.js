import React from 'react';
import { connect } from 'react-redux';
import { incCount, decCount } from '../actions/exercise';


const CountWidget = ({ count, incCount, decCount }) => {
    // console.log(props);
    return (
        <div>
            Number:
            <h2>{count}</h2>
            <br />
            <button className='ui circle button green' onClick={() => { incCount(count) }}  >+</button>
            <button className='ui button red' onClick={() => { decCount(count) }} >-</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    }
}

export default connect(
    mapStateToProps,          //global variables
    {
        incCount: incCount,  // functions (action creators) used to call 
        decCount: decCount   // specific reducers
    }
)(CountWidget);
