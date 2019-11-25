import React from "react";
import { Container, Row, Col, ListGroup, Button, Table } from "react-bootstrap";
import Tr from "./tr";
import { tsModuleBlock } from "@babel/types";
export default class Analiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disData: [],
      methods: []
    };
  }

  //Ініціалізація всього
  componentDidMount() {
    let tmp2 = [];
    let tmpMethods = [];
    let indexMethod = [];
    tmp2.push(["Ризикові події", "Рішення"]);
    this.props.data.eventRisk.disTechRisK.map(el => tmp2.push([el]));
    this.props.data.eventRisk.disValueRisK.map(el => tmp2.push([el]));
    this.props.data.eventRisk.disPlanRisK.map(el => tmp2.push([el]));
    this.props.data.eventRisk.disRealizeRisK.map(el => tmp2.push([el]));
    tmpMethods = [...this.props.data.methods];

    tmp2.forEach((element, i) => {
      if (i > 0) element.push([tmpMethods]);
    });

    for (let i = 0; i < tmp2.length - 1; i++) {
      indexMethod.push(0);
    }

    this.props.updateData("indexMethods", indexMethod);
    this.setState({ disData: tmp2, methods: indexMethod }, () => {
      this.props.updateData("indexMethods", this.state.methods);
    });
  }

  updateData = (value, rowIndex) => {
    this.setState(
      state => {
        const deepCopy = JSON.parse(JSON.stringify(state.methods));
        deepCopy[rowIndex] = value;
        return {
          methods: deepCopy
        };
      },
      () => {
        this.props.updateData("indexMethods", this.state.methods);
      }
    );
  };
  render() {
    return (
      <Container fluid>
        <br />
        <Table bordered>
          <tbody>
            {this.state.disData.map((el, i) => (
              <Tr data={el} rowIndex={i} updateData={this.updateData} />
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
