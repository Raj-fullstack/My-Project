import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function CreatePost({ addPost }) {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (author && title && body) {
      const newPost = { author, title, body };
      addPost(newPost); 
      navigate('/'); 
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Box sx={{ padding: '20px', boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>Create New Blog Post</Typography>
      <TextField
        label="Author"
        variant="outlined"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
        sx={{ marginBottom: '10px' }}
      />
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        sx={{ marginBottom: '10px' }}
      />
      <TextField
        label="Body"
        variant="outlined"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        multiline
        rows={4}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Add Blog Post
      </Button>
    </Box>
  );
}
