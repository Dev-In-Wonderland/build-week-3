
import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


class Modal extends Component {
  state = {
    esperienze: {
      name: "",
    }
  };

  handleChange = (propertyName, propertyValue) => {
    const value = propertyName === "numberOfPeople" ? parseInt(propertyValue) : propertyValue;

    this.setState({
      esperienze: {
        ...this.state.esperienze,
        [propertyName]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);

    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "POST",
      body: JSON.stringify(this.state.esperienze),
      headers: {
        Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjhlMmYxOTNlNjAwMTM4MDdmNTAiLCJpYXQiOjE2Nzc0ODYzMDYsImV4cCI6MTY3ODY5NTkwNn0.zISvpNCnyAT6Gud9asFHNbAGQC8lWmzxECVBhw1xfrM",
        "Content-Type":"application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("qualcosa è andato storto con la richiesta");
        }
      })
      .then(parsedBody => {
        console.log(parsedBody);
        alert("La tua richiesta è andata a buon fine, la risorsa è stata creata con id " + parsedBody._id);
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {

    return (
      <Container>
        <Row className="justify-content-center  mt-5">
          <Col xs={12} md={6}>
            <h2 className="text-center">Aggiorna i tuoi dati:</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Ruolo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ruolo"
                  value={this.state.esperienze.ruolo}
                
                  onChange={e => {
                    console.log(e.target.value);

                    this.handleChange("Ruolo", e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ruolo"
                  value={this.state.esperienze.company}
                
                  onChange={e => {
                    console.log(e.target.value);

                    this.handleChange("Company", e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Data Inizio</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={this.state.reservation.datainizio}
                  onChange={e => {
                    console.log(e.target.value);

                    // this.setState({ reservation: { ...this.state.reservation, dateTime: e.target.value } });
                    this.handleChange("Data Inizio", e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Data Cessazione</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={this.state.reservation.datacessazione}
                  onChange={e => {
                    console.log(e.target.value);

                    // this.setState({ reservation: { ...this.state.reservation, dateTime: e.target.value } });
                    this.handleChange("Data Cessazione", e.target.value);
                  }}
                />
              </Form.Group>
              

             
              <Button variant="primary" type="submit" className="d-block mx-auto">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Modal;

