// src/components/VideoUploadForm.js
import React, { useState } from 'react';
//import Vimeo from '@vimeo/vimeo'
import axios from 'axios'; // Import axios for making HTTP requests in the browser
//import { response } from 'express';


const client_id = '37e386bb850420595097016bd08a2b59772090e8'
const client_secret='WjMPhnS29dcu2wCG07/4hfiUYiAe1MckGJ+SBCrypNkAKHf1k9+24OVk7oZoCkkOKBN6yJIyYjOPXhPunjecNzvuD6LrAe0bfsZLR1FaMrBipezDwaMfNud4NbJyoRBV'
const access_token = 'fcc86293a3dd489085118234bfbf0b4e';


// Assuming you have the necessary client_id, client_secret, and access_token
let client = {
  client_id: client_id,
  client_secret: client_secret,
  access_token: access_token
};

const VideoUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    let file_name = file;
    console.log(file);

    let response ;
    try {
      // Use axios to make a POST request to the Vimeo API for video upload
      response = await axios.post(
        'https://api.vimeo.com/me/videos',
        file_name,
        {
          headers: {
            'Content-Type': 'video/*', // Adjust the Content-Type header based on your needs
            'Authorization': `Bearer ${client.access_token}`
          },
          params: {
            name: 'Untitled',
            description: 'The description goes here.'
          },
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = ((loaded / total) * 100).toFixed(2);
            console.log(loaded, total, percentage + '%');
          }
        }
      );

      console.log('Your video URI is:', response.data.uri);
    } catch (error) {
      console.log(response)
      console.error('Failed because:', error);
    }
  };

  // Rest of your component code...



  

  //   client.request(uri + '?fields=transcode.status', function (error, body, status_code, headers) {
  //     if (body.transcode.status === 'complete') {
  //       console.log('Your video finished transcoding.')
  //     } else if (body.transcode.status === 'in_progress') {
  //       console.log('Your video is still transcoding.')
  //     } else {
  //       console.log('Your video encountered an error during transcoding.')
  //     }
  //   })



  //   client.request(uri + '?fields=link', function (error, body, statusCode, headers) {
  //     if (error) {
  //       console.log('There was an error making the request.')
  //       console.log('Server reported: ' + error)
  //       return
  //     }

  //     console.log('Your video link is: ' + body.link)
  //   })
   //};

  return (
    <div>
      <h2>Component 1: Video Upload Form</h2>
      <label>Video File:</label>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br />
      <button type="button" onClick={handleUpload}>
        Upload Video
      </button>
    </div>
  );
};

export default VideoUploadForm;
