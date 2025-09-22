import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';                                     
import { Button, TextField, Box } from '@mui/material';

export default function EditPost({ updatePost }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updatedPost, setUpdatedPost] = useState({
    author: '',
    title: '',
    body: '',
  });
  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/posts/${id}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const post = await response.json();
        setUpdatedPost(post);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };
console.log(handleChange)
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:8000/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost), 
      });
      
      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      navigate('/'); 
    } catch (err) {
      setError(err.message); 
      console.error("Error updating post:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Edit Post</h2>
      <TextField
        label="Author"
        name="author"
        value={updatedPost.author}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Title"
        name="title"
        value={updatedPost.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Body"
        name="body"
        value={updatedPost.body}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <Box sx={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Box>
    </div>
  );
}
