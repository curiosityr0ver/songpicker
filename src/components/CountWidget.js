import React from 'react';
import { connect } from 'react-redux';
import { incCount, decCount } from '../actions/exercise';


const CountWidget = (props) => {
    console.log(props);
    return (
        <div>
            Number:
            <h2>{props.count}</h2>
            <br />
            <button className='ui button green' onClick={() => { props.incCount() }}  >+</button>
            <button className='ui button red' onClick={() => { props.decCount() }} >-</button>
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
        incCount: incCount,  // functions used to call 
        decCount: decCount   // specific reducers
    }
)(CountWidget);
