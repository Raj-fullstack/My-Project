import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Typography, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export default function BlogPost({ posts, updatePost, deletePost }) {
  const [moreview, setMoreView] = useState(null);
  const [ispending, setIspending] = useState(true); 
  

  useEffect(() => {'http://localhost:8000/posts'
    
    setTimeout(() => {
      setIspending(false);  
    }, 1000); 
  }, []);

  const displaycard = (index) => { 
    setMoreView((prevIndex) => (prevIndex === index ? null : index));
  };

  if (ispending) {
    return   <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    <CircularProgress color="secondary" />
    <CircularProgress color="success" />
    <CircularProgress color="inherit" />
  </Stack>
  }

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/create">
        <Button variant="contained" color="primary" sx={{ marginBottom: '20px' }}>
          Create Blog Post
        </Button>
      </Link>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ width: '300px', padding: '20px', boxShadow: 3 }}>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
              Author: {post.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Title: {post.title}
            </Typography>
            <Typography variant="body2">
              <strong>Body: </strong>
              {moreview === post.id ? post.body : `${post.body.slice(0, 100)}...`}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => displaycard(post.id)}
              sx={{ marginTop: '10px' }}
            >
              {moreview === post.id ? 'Read Less' : 'Read More'}
            </Button>
            <Box sx={{ marginTop: '10px' }}>
              <Link to={`/edit/${post.id}`}>
                <Button variant="contained" color="warning" size="small" sx={{ marginRight: '10px' }}>
                  Edit
                </Button>
              </Link>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
}
