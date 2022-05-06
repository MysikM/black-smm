import React from 'react';
import './background-video.scss';
import bigSizeVideo from '../../assets/Video/big_size.mp4';
import defaultSizeVideo from '../../assets/Video/default_size.gif';


const BackgroundVideo = ({children}) => {
    return (
        <div className='video'>
            {children}
            <video className='video--big' src={bigSizeVideo} type='video/mp4' autoPlay muted loop />
            <img className='video--default' src={defaultSizeVideo} alt='video' />
        </div>
    );
};

export default BackgroundVideo;