import React from 'react';
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from 'reactstrap'

import data from "../data.json"

const  BookCard = (el) => {
  return ( 
       
data.map(el => <div className="App1">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.poster_image} />
  <Card.Body>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Author:{el.author}</ListGroupItem>
    <ListGroupItem>Title:{el.title}</ListGroupItem>
    <ListGroupItem>Description:{el.description}</ListGroupItem>
    <ListGroupItem>Rating:{el.rating}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Extra details</Card.Link>
  </Card.Body>
</Card>
  </div>))}
  

export default BookCard;