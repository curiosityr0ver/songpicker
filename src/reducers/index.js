import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: "Tum Hi Ho",
            duration: "3:24"
        },
        {
            title: "Babaji Ki Booti",
            duration: "4:15"
        },
        {
            title: "Arabic Kuthu",
            duration: "3:45"
        },
        {
            title: "Kesariya",
            duration: "2:56"
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type == "SONG_SELECTED") {
        return action.payload
    } else {
        return selectedSong
    }
}

export default combineReducers(
    {
        songs: songsReducer,
        selectedSong: selectedSongReducer
    }
)