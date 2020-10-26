import React, { useEffect, useState } from 'react';
import axios from './axios';
import './App.css';
import Video from './Component/Video/Video';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({url, channel, description, song, likes, messages, shares, _id}) => (
          <Video
            key={_id}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={parseInt(likes)}
            messages={parseInt(messages)}
            shares={parseInt(shares)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
