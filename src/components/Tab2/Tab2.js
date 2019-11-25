import React from "react";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import Tr from "./tr";
export default class Analiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trData: [],
      trNums: []
    };
  }
  resultClick = () => {
    alert("Result");
  };
  componentDidMount() {
    let tmp2 = [];
    let numbers = [];
    let n = 0.0;
    let tmp1 = [];
    const reducer = (acumulator, currentValue) => +acumulator + +currentValue;
    let ER = 0.0;
    tmp2.push(["№", "Ризикові події", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "ER"]);
    this.props.data.eventRisk.disTechRisK.map(el => tmp2.push([el]));
    this.props.data.eventRisk.disValueRisK.map(el => tmp2.push([el]));
    this.props.data.eventRisk.disPlanRisK.map(el => tmp2.push([el]));
    this.props.data.eventRisk.disRealizeRisK.map(el => tmp2.push([el]));
    for (let i = 1; i < tmp2.length; i++) {
      numbers = [];
      n = 0.0;
      for (let j = 0; j < 10; j++) {
        n = Math.random();
        numbers.push(n.toFixed(2));
      }
      ER = numbers.reduce(reducer);
      ER /= 10;
      numbers.push(ER.toFixed(2));
      tmp1.push(numbers);
      tmp2[i].unshift(i);
      tmp2[i].push(...numbers);
    }

    let tmpMassResult = [];
    tmp1.forEach(el => {
      tmpMassResult.push(el[10]);
    });

    this.setState({ trNums: tmp1 });
    this.setState({ trData: tmp2 });
    this.props.setER(tmpMassResult);
  }

  updateData = (value, rowIndex, colIndex) => {
    this.setState(
      state => {
        const deepCopy = JSON.parse(JSON.stringify(state.trNums));
        deepCopy[rowIndex - 1][colIndex - 2] = value;
        let tmpData = this.state.trData;
        let result = tmpData;
        let rowId = rowIndex - 1;
        let matrix = [];
        let rowData = [];
        let nums = [];
        let ER = 0.0;
        let massEr = [];
        let tmpER = 0;
        const reducer = (acumulator, currentValue) =>
          +acumulator + +currentValue;
        matrix.push(...deepCopy);
        rowData.push(...matrix[rowId]);
        nums = rowData.slice(0, 10);
        ER = nums.reduce(reducer);
        ER /= rowData.length - 1;
        matrix[rowId][10] = ER.toFixed(2);
        for (let i = 1; i < tmpData.length; i++) {
          for (let j = 2; j < tmpData[i].length; j++) {
            result[i][j] = matrix[i - 1][j - 2];
          }
          tmpER = matrix[i - 1][10];
          massEr.push(tmpER);
        }

        this.props.setER(massEr);
        return {
          trData: result
        };
      },
      () => {}
    );
  };
  render() {
    return (
      <Container fluid>
        <br />

        <h5>Ймовірність настання ризикових подій, встановлені експертами</h5>
        <Button
          block
          onClick={() => {
            this.resultClick();
          }}
        >
          Результат по групах
        </Button>
        <br />
        <Table bordered>
          <tbody>
            {this.state.trData.map((el, i) => (
              <Tr data={el} rowIndex={i} updateData={this.updateData} />
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
