import React from "react";
import { Container, Row, Col, Form, Table } from 'react-bootstrap';

export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      lk1: "Mathe",
      lk2: "Deutsch",
      pk3L: "",
      pk4L: "",
      pk5L: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.getCourses = this.getCourses.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value },
      () => { this.getCourses() }
    );
  }

  getCourses() {

    var pk3L = "";
    var pk4L = "";
    var pk5L = "";

    if (this.state.lk1 === "Englisch" || this.state.lk1 === "Mathe" || this.state.lk1 === "Physik" || this.state.lk1 === "Bio" || this.state.lk1 === "Chemie") {

      if (this.state.lk1 !== "Mathe" && this.state.lk2 !== "Mathe") {
        pk3L = "Mathe";
      }

      if (pk3L === "" && this.state.lk2 !== "Deutsch") {
        pk3L = "Deutsch";
      } else if (pk4L === "" && this.state.lk2 !== "Deutsch") {
        pk4L = "Deutsch";
      }

      if (this.state.lk2 !== "PoWi" && this.state.lk2 !== "Geschichte" && this.state.lk2 !== "Reli") {

        if (pk3L === "") {
          pk3L = "PoWi / Geschichte / Reli";
        } else if (pk4L === "") {
          pk4L = "PoWi / Geschichte / Reli";
        } else if (pk5L === "") {
          pk5L = "PoWi / Geschichte / Reli";
        }
      }

      if (pk4L === "") {
        pk4L = "Englisch, Französisch Fortg., Spanisch Fortg., Latein Anf. oder Naturwissenschaft (Bio, Ch, Ph) oder Informatik";
      }

      if (pk5L === "") {
        pk5L = "Frei";
      }
    }

    this.setState({ pk3: pk3L, pk4: pk4L, pk5: pk5L });

  }

  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <br />
              <h2>Prüfungsfachrechner</h2>
              <p class="lead">Landesabitur Hessen 2018 - Geschwister Scholl Schule Bensheim</p>
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={8}>
              <Row>
                <Col>
                  <div class="form-group">
                    <Form.Label for="exampleInputPassword1">1. Leistungskurs</Form.Label>
                    <select class="form-control" name="lk1" onChange={this.handleChange}>
                      <option>Mathe</option>
                      <option>Englisch</option>
                      <option>Physik</option>
                      <option>Bio</option>
                      <option>Chemie</option>
                    </select>
                  </div>
                </Col>
                <Col>
                  <div class="form-group">
                    <Form.Label for="exampleInputPassword1">2. Leistungskurs</Form.Label>
                    <select class="form-control" name="lk2" onChange={this.handleChange}>
                      <option>Deutsch</option>
                      <option>Englisch </option>
                      <option>Franz&ouml;sich</option>
                      <option>Spanisch</option>
                      <option>PoWi</option>
                      <option>Geschichte</option>
                      <option>Mathe</option>
                      <option>Bio</option>
                      <option>Chemie</option>
                      <option>Physik</option>
                      <option>Informatik</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <br />
              <Table>
                <tbody>
                  <tr>
                    <td style={{ width: '50%' }}>1. Leistungskurs</td>
                    <td style={{ width: '50%' }}>{this.state.lk1}</td>
                  </tr>
                  <tr>
                    <td>2. Leistungskurs</td>
                    <td>{this.state.lk2}</td>
                  </tr>
                  <tr>
                    <td>3. Prüfungsfach</td>
                    <td>{this.state.pk3}</td>
                  </tr>
                  <tr>
                    <td>4. Prüfungsfach</td>
                    <td>{this.state.pk4}</td>
                  </tr>
                  <tr>
                    <td>5. Prüfungsfach</td>
                    <td>{this.state.pk5}</td>
                  </tr>
                </tbody>
              </Table>
              <br />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="text-center">
              © Robin Schumacher - <a href="https://www.robin-schumacher.com">robin-schumacher.com</a>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}