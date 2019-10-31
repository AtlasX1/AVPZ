import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default class Tab1_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      techRisk: [0, 0, 0, 0, 0, 0, 0],
      valuRisk: [0, 0, 0],
      planRisk: [0, 0, 0],
      realizeRisk: [0, 0, 0, 0, 0]
    };
  }
  addToArray(chek, arrType) {
    let tmp;
    switch (arrType) {
      case 0:
        tmp = this.state.techRisk;
        break;
      case 1:
        tmp = this.state.valuRisk;
        break;
      case 2:
        tmp = this.state.planRisk;
        break;
      case 3:
        tmp = this.state.realizeRisk;
        break;
      default:
        break;
    }
    tmp[chek] = tmp[chek] ? 0 : 1;
    switch (arrType) {
      case 0:
        this.setState({ realizeRisk: tmp });
        break;
      case 1:
        this.setState({ valuRisk: tmp });
        break;
      case 2:
        this.setState({ planRisk: tmp });
        break;
      case 3:
        this.setState({ realizeRisk: tmp });
        break;
      default:
        break;
    }
    alert(tmp);
  }
  render() {
    return (
      <Container fluid className="unselectable">
        <br />
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
                <Card>
                  <Card.Body>
                    <Card.Title>Технічні ризики</Card.Title>
                    <Card.Text>
                      <Form>
                        <Form.Check
                          name="check"
                          label="Наявні нереалістичні чи неоціненні функціональні характеристики ПЗ"
                          onChange={() => {
                            this.addToArray(0, 0);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Наявні нереалістичні чи неоціненні характеристики якості ПЗ"
                          onChange={() => {
                            this.addToArray(1, 0);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Наявні нереалістичні чи неоціненні характеристики надійності ПЗ"
                          onChange={() => {
                            this.addToArray(2, 0);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Наявні нереалістичні рекомендації щодо майбутньої застосованості ПЗ"
                          onChange={() => {
                            this.addToArray(3, 0);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Наявні нереалістичні характеристики часової продуктивності ПЗ"
                          onChange={() => {
                            this.addToArray(4, 0);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Наявні нереалістичні рекомендації щодо майбутньої супроводжуваності ПЗ"
                          onChange={() => {
                            this.addToArray(5, 0);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Наявні нереалістичні пропозиції щодо повторного використання ПЗ"
                          onChange={() => {
                            this.addToArray(6, 0);
                          }}
                        />
                      </Form>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                {" "}
                <Card>
                  <Card.Body>
                    <Card.Title>Вартісні ризики</Card.Title>
                    <Card.Text>
                      <Form>
                        <Form.Check
                          name="check"
                          label="Наявні щодо сумарного бюджету на реалізацію ПЗ"
                          onChange={() => {
                            this.addToArray(0, 1);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Вказана недоступна вартість реалізації програмного проекту"
                          onChange={() => {
                            this.addToArray(1, 1);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Присутній низький ступінь реалізму при оцінюванні витрат на ПЗ"
                          onChange={() => {
                            this.addToArray(2, 1);
                          }}
                        />
                      </Form>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="6">
                {" "}
                <Card>
                  <Card.Body>
                    <Card.Title>Планові ризики</Card.Title>
                    <Card.Text>
                      <Form>
                        <Form.Check
                          name="check"
                          label="Наявні нереалістичні властивості та можливості гнучкості внесення змін до планів життєвого циклу розроблення ПЗ"
                          onChange={() => {
                            this.addToArray(0, 2);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Наявні нереалістичні можливості порушення встановлених термінів реалізації етапів життєвого циклу розроблення ПЗ"
                          onChange={() => {
                            this.addToArray(1, 2);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Присутній низький ступінь реалізму при встановленні планів і етапів життєвого циклу розроблення ПЗ"
                          onChange={() => {
                            this.addToArray(3, 2);
                          }}
                        />
                      </Form>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                {" "}
                <Card>
                  <Card.Body>
                    <Card.Title>
                      Ризики реалізації та управління проектом
                    </Card.Title>
                    <Card.Text>
                      <Form>
                        <Form.Check
                          name="check"
                          label="Відсутні нереалістичні нереалістичні стратегії реалізації програмного проекту"
                          onChange={() => {
                            this.addToArray(0, 3);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Відсутні нереалістичні методики планування проекту розроблення ПЗ"
                          onChange={() => {
                            this.addToArray(1, 3);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Відсутні нереалістичні методики оцінювання програмного проекту"
                          onChange={() => {
                            this.addToArray(2, 3);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Наявне неналежне документування етапів реалізації ПЗ"
                          onChange={() => {
                            this.addToArray(3, 3);
                          }}
                        />
                        <Form.Check
                          name="check"
                          label="Відсутні нереалістичні матодики прогнозування результатів реалізації ПЗ"
                          onChange={() => {
                            this.addToArray(4, 3);
                          }}
                        />
                      </Form>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Button block onClick={() => {}}>
              Обрахувати ймовірність появи ризику
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
