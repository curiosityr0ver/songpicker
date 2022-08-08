import React from 'react';
import { connect } from 'react-redux/es/exports';
import { selectSong } from '../actions';

const SongList = (props) => {


    const displayMethod = () => {
        return (
            props.songs.map((song) => {
                return (
                    <div className='item' key={song.title}>
                        <div className='right floated content'>
                            <button className='ui button primary' onClick={() => { props.selectSong(song) }}>Select</button>
                        </div>
                        <div className='content'>
                            {song.title}
                        </div>
                    </div>
                )
            })
        )
    }



    return (
        <div className='ui divided list'>

            {displayMethod()}

        </div>

    );
}

const matchStateToProps = (state) => {
    // console.log(state);
    return {
        songs: state.songs
    }
}

export default connect(
    matchStateToProps,
    { selectSong: selectSong }
)(SongList);
