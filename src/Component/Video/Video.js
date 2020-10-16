import React, { useRef, useState } from 'react';

import VideoFooter from '../VideoFooter/VideoFooter';
import './Video.css';

const Video = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        //BEM name convention
        <div className="video">
            <video
                onClick={handleVideoPress}
                className="video__player" 
                loop
                ref={videoRef}
                src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1">
            </video>
            <VideoFooter />
            {/*VideoFooter*/}
            {/*VideoSidebar*/}
        </div>
    )
}

export default Video
