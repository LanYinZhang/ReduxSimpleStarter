import React from 'react';

const VideoListItem = ({video, onSelectVideo}) => {
    const videoURL = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item"
        onClick = {() => onSelectVideo(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src = {videoURL} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}
export default VideoListItem;