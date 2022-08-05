import React, { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';


const SongList = (props) => {

    useEffect(() => {
        console.log(props);
    });

    return (
        <div>
            Kolaveri Di
        </div>
    );
}

const matchStateToProps = (state) => {

    return {
        songs: state.songs
    }
}

export default connect(matchStateToProps)(SongList);
