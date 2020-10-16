import React from 'react';
import './App.css';
import Video from './Component/Video/Video';

const App = () => {
  return (
    <div className="app">
      <h1>TIKTOK CLONE</h1>

      <div className="app__videos">
        <Video 
          url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1"
          channel="jalelyak"
          description="Epic MERN stack TIK TOK"
          song="99 problems but REACT aint one"
          likes={111}
          messages={222}
          shares={333}
        />
        <Video 
          url="http://pedagogie.ac-limoges.fr/test/IMG/mp4/vts_01.mp4"
          channel="jalelyak"
          description="Epic MERN stack TIK TOK"
          song="99 problems but REACT aint one"
          likes={111}
          messages={222}
          shares={333}
        />
      </div>
     

      {/* app container */}
        {/* video */}
        {/* video */}
        {/* video */}
        {/* video */}
    </div>
  );
}

export default App;
