// src/components/VideoInfoForm.js
import React, { useState } from 'react';
//import axios from 'axios';

const VideoInfoForm = ({ videoUrl }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    // try {
    //   // Make a POST request to send the video URL, title, and description to the backend
    //   const response = await axios.post('http://localhost:3001/save-video-info', {
    //     url: videoUrl,
    //     title,
    //     description,
    //   });

    //   console.log('Video information saved successfully:', response.data);
    // } catch (error) {
    //   console.error('Error saving video information:', error);
    // }
  };
  

  return (
    <div>
      <h2>Component 2: Video Information Form</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <button type="button" onClick={handleSave}>
        Save Video Information
      </button>
    </div>
  );
};

export default VideoInfoForm;
