import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TextField from '@mui/material/TextField'


export default function Login() {
  
  const navigate = useNavigate();

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
   
    const Newblog = {
      author,
      title,
      body,
    };
console.log(Newblog)
    
    navigate(`/blogpost/id${author}`, { state: Newblog });
  };

  return (
    <Container
    className="d-flex justify-content-center align-items-center"
    style={{ height: "100vh" }}
  >
    <Row className="w-100">
      <Col xs={12} md={6} lg={4} className="mx-auto">
        <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
          <h2 className="text-center mb-4">Publish Your Blog</h2>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
         
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={4}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
    
  );
}
