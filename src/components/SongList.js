import React from 'react';
import { connect } from 'react-redux/es/exports';

const SongList = () => {
    return (
        <div>
            Kolaveri Di
        </div>
    );
}

const matchStateToProps = (state) => {
    console.log(state.songs);
    return {
        songs: state.songs
    }
}

export default connect(matchStateToProps)(SongList);
