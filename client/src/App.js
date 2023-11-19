// src/App.js
import React, { useState } from 'react';
import VideoUploadForm from './components/VideoUploadForm';
import VideoInfoForm from './components/VideoInfoForm';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');

   const handleUploadSuccess = (url) => {
  //   // Set the video URL in the parent component's state
  //   setVideoUrl(url);
   };

  return (
    <div className="container">
      <h1>Vimeo Video Uploader</h1>
      <VideoUploadForm onUploadSuccess={handleUploadSuccess} />
      {/* {videoUrl && <VideoInfoForm videoUrl={videoUrl} />} */}
    </div>
  );
}

export default App;
