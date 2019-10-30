import React from "react";
import { Container, Row, Col, Card, Form, Checkbox } from "react-bootstrap";

export default class Tab1_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { techRisk: [], valuRisk: [], planRisk: [], realizeRisk: [] };
  }
  render() {
    return (
      <Container fluid>
          <br/>
        <Card>
          <Card.Body>
            <Card.Title>
              Якщо наведені нижче твердження справджуються для вашої
              специфікації вимог, то відмітьте це у відповідному полі. Після
              завершення натисність кнопку обрахувати ймовірність появи ризиків,
              щоб переглянути результат роботи.
            </Card.Title>
            <Row>
              <Col md="6">
                <Card >
                  <Card.Body>
                    <Card.Title>Технічні ризики</Card.Title>
                    <Card.Text>
                      <Form>
                        <Form.Check name="radios" label="Наявні нереалістичні чи неоціненні функціональні характеристики ПЗ" id={`inline-1`} />
                        <Form.Check name="radios" label="Наявні нереалістичні чи неоціненні характеристики якості ПЗ" id={`inline-2`} />
                        <Form.Check name="radios" label="Наявні нереалістичні чи неоціненні характеристики надійності ПЗ" id={`inline-3`} />
                        <Form.Check name="radios" label="Наявні нереалістичні рекомендації щодо майбутньої застосованості ПЗ" id={`inline-4`} />
                        <Form.Check name="radios" label="Наявні нереалістичні характеристики часової продуктивності ПЗ" id={`inline-5`} />
                        <Form.Check name="radios" label="Наявні нереалістичні рекомендації щодо майбутньої супроводжуваності ПЗ" id={`inline-6`} />
                        <Form.Check name="radios" label="Наявні нереалістичні пропозиції щодо повторного використання ПЗ" id={`inline-7`} />
                      </Form>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                {" "}
                <Card >
                  <Card.Body>
                    <Card.Title>Вартісні ризики</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {" "}
                <Card >
                  <Card.Body>
                    <Card.Title>Технічні ризики</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                {" "}
                <Card >
                  <Card.Body>
                    <Card.Title>Технічні ризики</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
