import React from "react";
import Card from 'react-bootstrap/Card';

export default function BusinessCardInfo({heading, information}) {
    return (
        <>
            <Card.Header className="card-info-heading">
                {heading}
            </Card.Header>
            <Card.Text className="card-info-detail">
                {information}
            </Card.Text>
        </>
    );
}