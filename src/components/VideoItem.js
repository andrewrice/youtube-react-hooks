import './VideoItem.css';
import React from 'react';

const VideoItem = ( { video, onVideoSelect }) => {

    return (
        <div className="video-item item" onClick={ () => onVideoSelect(video) }>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    <div dangerouslySetInnerHTML={{__html: video.snippet.title}}></div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;