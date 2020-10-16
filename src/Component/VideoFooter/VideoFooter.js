import React from 'react'
import Ticker from 'react-ticker';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './VideoFooter.css'

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@jalelyak</h3>
                <p>This is a description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon
                        className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>I am a Song</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt="record"
            />
        </div>
    )
}

export default VideoFooter
