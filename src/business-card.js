import React from "react";
import { Container } from "react-dom";
import Person from './images/logo.png';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import BusinessCardInfo from "./business-card-info";

export default function BusinessCard  () {
    const bci = [
        {
        'heading': 'About',
        'information': 'I am a front end developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'
    },
    {
        'heading': 'Interest',
        'information': 'Food expert. Music scholar. reader. internet fanatic. Enterpreneur. Travel Geek.'
    }
    ];

    const items = bci.map((item) => {
        return <BusinessCardInfo key={item.heading} heading={item.heading} information={item.information} />
    });

    console.log("bci",bci);
    console.log("items",items);

    if(!items) return;
  
    return (
    <div className="card">
    {/* <Card  className="card-body" style={{ width: '18rem' }}> */}
    <Card   style={{ width: '18rem' }}>
      <Card.Img className="person-img" variant="top" src={Person} />
      <Card.Body className="card-body">
        <Card.Title className="card-heading">Laura Smith</Card.Title>
        <Card.Text className="card-designation">
          Frontend Developer
        </Card.Text>
        <Card.Text className="card-website">
          laurasmith.website
        </Card.Text>
        <div className="buttondiv">
        <Button variant="light" className="card-button">Email</Button>{' '}
        <Button variant="primary" className="card-button">LinkedIn</Button>{' '}
        </div>
      </Card.Body>

      <Card.Body className="card-body">
        {items ? items : null}
      </Card.Body>
    </Card>
    </div>
  );
};

