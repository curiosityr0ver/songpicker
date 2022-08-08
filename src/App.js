import React from 'react';
import CountWidget from './components/CountWidget';
import SongDetail from './components/SongDetail';

import SongList from './components/SongList';


const App = () => {
    return (
        <div className='ui grid'>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList />
                </div>
                <div className='column eight wide'>
                    <SongDetail />
                </div>
            </div>
            <div className='ui row'>
                <div className='column eight wide'>
                    <CountWidget />
                </div>
            </div>
        </div >
    );
}



export default App;
