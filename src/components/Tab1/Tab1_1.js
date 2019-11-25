import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CardsInfo from "./Card";
export default class Tab1_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      techRisk: [0, 0, 0, 0, 0, 0, 0],
      valuRisk: [0, 0, 0],
      planRisk: [0, 0, 0],
      realizeRisk: [0, 0, 0, 0, 0],
      disTechRisK: this.props.data.sourseRisk.disTechRisK,
      disValueRisK: this.props.data.sourseRisk.disValueRisK,
      disPlanRisK: this.props.data.sourseRisk.disPlanRisK,
      disRealizeRisK: this.props.data.sourseRisk.disRealizeRisK
    };
  }
  addToArray = (chek, arrType) => {
    const tmp = this.state[arrType];
    tmp[chek] = tmp[chek] ? 0 : 1;
    this.setState({ [arrType]: tmp });
    alert(this.state[arrType]);
  };
  calculate = () => {
    console.log(this);
  };
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
                <CardsInfo
                  title="Технічні ризики"
                  data={this.state.disTechRisK}
                  riskType="techRisk"
                  add={this.addToArray}
                />
              </Col>
              <Col md="6">
                <CardsInfo
                  title="Вартісні ризики"
                  data={this.state.disValueRisK}
                  riskType="valuRisk"
                  add={this.addToArray}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="6">
                <CardsInfo
                  title="Планові ризики"
                  data={this.state.disPlanRisK}
                  riskType="planRisk"
                  add={this.addToArray}
                />
              </Col>
              <Col md="6">
                <CardsInfo
                  title="Ризики реалізації та управління проектом"
                  data={this.state.disRealizeRisK}
                  riskType="realizeRisk"
                  add={this.addToArray}
                />
              </Col>
            </Row>
            <br />
            <Button
              block
              onClick={() => {
                this.calculate();
              }}
            >
              Обрахувати ймовірність появи ризику
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
