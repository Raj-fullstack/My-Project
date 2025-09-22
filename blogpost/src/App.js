import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

function App() {
  const [posts, setPosts] = useState([]);

  // Fetch posts
  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));;
  }, []);

  // Add new post
  const addPost = (newPost) => {
    fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => setPosts([...posts, data]));
  };

  // Update post
  const updatePost = (id, updatedPost) => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost),
    })
      .then((response) => response.json())
      .then((data) => {
        
        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === id ? data : post))
        );
      })
      .catch((error) => console.error('Error updating post:', error));
      
  };

  // Delete post
  const deletePost = (id) => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
      });
  };

  function Navbar() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/"> Home </Button>
          <Button color="inherit" component={Link} to="/create">Create Post </Button>

        </Toolbar>
      </AppBar>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"element={<BlogPost posts={posts} updatePost={updatePost} deletePost={deletePost}/>}/>
        <Route path="/create" element={<CreatePost addPost={addPost} />} />
        <Route path="/edit/:id" element={<EditPost posts={posts} updatePost={updatePost} />} />
        
      </Routes>
    </Router>
  );
}

export default App;
