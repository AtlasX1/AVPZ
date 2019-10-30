import React from "react";
import { Container, Tabs, Tab, Card } from "react-bootstrap";
import "./style.css";
import Tab1_1 from "./components/Tab1/Tab1_1.js";
import Tab1_2 from "./components/Tab1/Tab1_2.js";
function App() {
  return (
    <Container fluid>
      <Tabs defaultActiveKey="Tab1" className="tabs">
        <Tab eventKey="Tab1" title="Ідентифікація ризиків розроблення ПЗ">
          <Tabs defaultActiveKey="Tab1_1" className="tabs">
            <Tab eventKey="Tab1_1" title="Джерела появи ризиків">
              <Tab1_1 />
            </Tab>
            <Tab eventKey="Tab1_2" title="Потенційні ризикові події">
              <Tab1_2 />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey="Tab2" title="Аналіз ризиків розроблення ПЗ">
          2
        </Tab>
        <Tab eventKey="Tab3" title="Визначення">
          <div>3</div>
        </Tab>
        <Tab eventKey="Tab4" title="Усунення ризиків">
          <div>4</div>
        </Tab>
        <Tab eventKey="Tab5" title="Моніторинг ризиківі">
          <div>5</div>
        </Tab>
        <Tab eventKey="Tab6" title="Результуюча величина ризику">
          <div>6</div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
