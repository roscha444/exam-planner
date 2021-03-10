import React from "react";
import { Alert, Container, Row, Col, Form, Table } from 'react-bootstrap';

export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      advancedCourse1: "Mathe",
      advancedCourse2: "Deutsch",
      examCourse3: "",
      examCourse4: "",
      examCourse5: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateCourses = this.updateCourses.bind(this);
  }

  componentDidMount() {
    this.updateCourses();
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value },
      () => { this.updateCourses() }
    );
  }

  updateCourses() {
    var examCourse3;
    var examCourse4;
    var examCourse5;

    if (this.state.advancedCourse1 !== "Mathe" && this.state.advancedCourse2 !== "Mathe") {
      examCourse3 = "Mathe";
      if (this.state.advancedCourse2 !== "Deutsch") {
        examCourse4 = "Deutsch";
        if (this.state.advancedCourse2 !== "PoWi" && this.state.advancedCourse2 !== "Geschichte" && this.state.advancedCourse2 !== "Reli") {
          examCourse5 = "PoWi / Geschichte / Reli";
        } else {
          examCourse5 = "Frei";
        }
      } else {
        examCourse4 = "PoWi / Geschichte / Reli";
        examCourse5 = "Frei";
      }

    } else if (this.state.advancedCourse2 !== "Deutsch") {
      examCourse3 = "Deutsch";
      if (this.state.advancedCourse2 !== "PoWi" && this.state.advancedCourse2 !== "Geschichte" && this.state.advancedCourse2 !== "Reli") {
        examCourse4 = "PoWi / Geschichte / Reli";
      } else {
        examCourse4 = "Englisch, Französisch Fortg., Spanisch Fortg., Latein Anf. oder Naturwissenschaft (Bio, Ch, Ph) oder Informatik";
      }
      examCourse5 = "Frei";
    } else {
      examCourse3 = "PoWi / Geschichte / Reli";
      examCourse4 = "Englisch, Französisch Fortg., Spanisch Fortg., Latein Anf. oder Naturwissenschaft (Bio, Ch, Ph) oder Informatik";
      examCourse5 = "Frei";
    }
    this.setState({ examCourse3: examCourse3, examCourse4: examCourse4, examCourse5: examCourse5 });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <br />
              <h2>Prüfungsfachrechner</h2>
              <p className="lead">Landesabitur Hessen 2018 - Geschwister Scholl Schule Bensheim</p>
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row>
                <Col>
                  <div>
                    <Form.Label>1. Leistungskurs</Form.Label>
                    <select className="form-control" name="advancedCourse1" onChange={this.handleChange}>
                      {this.state.advancedCourse2 !== "Mathe" ? <option>Mathe</option> : ""}
                      {this.state.advancedCourse2 !== "Englisch" ? <option>Englisch</option> : ""}
                      {this.state.advancedCourse2 !== "Bio" ? <option>Bio</option> : ""}
                      {this.state.advancedCourse2 !== "Chemie" ? <option>Chemie</option> : ""}
                      {this.state.advancedCourse2 !== "Physik" ? <option>Physik</option> : ""}
                    </select>
                  </div>
                </Col>
                <Col>
                  <div>
                    <Form.Label>2. Leistungskurs</Form.Label>
                    <select className="form-control" name="advancedCourse2" onChange={this.handleChange}>
                      <option>Deutsch</option>
                      {this.state.advancedCourse1 !== "Englisch" ? <option>Englisch</option> : ""}
                      <option>Französich</option>
                      <option>Spanisch</option>
                      <option>PoWi</option>
                      <option>Geschichte</option>
                      {this.state.advancedCourse1 !== "Mathe" ? <option>Mathe</option> : ""}
                      {this.state.advancedCourse1 !== "Bio" ? <option>Bio</option> : ""}
                      {this.state.advancedCourse1 !== "Chemie" ? <option>Chemie</option> : ""}
                      {this.state.advancedCourse1 !== "Physik" ? <option>Physik</option> : ""}
                      <option>Informatik</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <br />
              <Table>
                <tbody>
                  <tr>
                    <td style={{ width: '50%' }}>1. Leistungskurs (schriftl.)</td>
                    <td style={{ width: '50%' }}>{this.state.advancedCourse1}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '50%' }}>2. Leistungskurs (schriftl.)</td>
                    <td style={{ width: '50%' }}>{this.state.advancedCourse2}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '50%' }}>3. Prüfungsfach</td>
                    <td style={{ width: '50%' }}>{this.state.examCourse3}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '50%' }}>4. Prüfungsfach</td>
                    <td style={{ width: '50%' }}>{this.state.examCourse4}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '50%' }}>5. Prüfungsfach</td>
                    <td style={{ width: '50%' }}>{this.state.examCourse5}</td>
                  </tr>
                </tbody>
              </Table>
              <p className="text-center">3. oder 4. oder 5. Prüfungsfach ist eine schriftliche Prüfung.</p>
              <br />
              <Alert variant="info" className="text-center">Alle Angaben ohne Gewähr!</Alert>
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row md={{ span: 8, offset: 2 }}>
            <Col className="text-center">
              © Robin Schumacher - <a href="https://www.robin-schumacher.com">robin-schumacher.com</a> - <a href="https://datenschutz.robin-schumacher.com">Datenschutz</a> - <a href="https://github.com/roscha444/exam-planner"><i class="fab fa-github" style={{ color: 'black' }}></i> View on Github</a>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}