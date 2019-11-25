import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const CardInfo = ({ title, data, add, riskType }) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        <Form>
          {data.map((el, i) => (
            <Form.Check
              label={el}
              onChange={() => {
                add(i, riskType);
              }}
            ></Form.Check>
          ))}
        </Form>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default CardInfo;
