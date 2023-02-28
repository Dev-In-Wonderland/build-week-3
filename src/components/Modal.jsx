import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Example() {
  const [esperienze, setEsperienze] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = function (field, value) {
    setEsperienze((prev) => {
      return { ...prev, [field]: value };
    });
    //le quadre sostituiscono
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63fe2788579c6300137cf8c3/experiences`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify( esperienze ),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log("err if");
      }
    } catch (err) {
      console.log("err catch");
    }
  };

  return (
    <>
      <button className="border border-none" onClick={handleShow}>
        +
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Role"
                value={esperienze.role}
                onChange={(e) => {
                  console.log(e.target.value);

                  handleChange("role", e.target.value);
                }}
              />
              <Form.Label>Compagnia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company"
                value={esperienze.company}
                onChange={(e) => {
                  console.log(e.target.value);

                  handleChange("company", e.target.value);
                }}
              />
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                type="date"
                placeholder="Data di inizio"
                value={esperienze.startDate}
                onChange={(e) => {
                  console.log(e.target.value);

                  handleChange("startDate", e.target.value);
                }}
              />
              <Form.Label>Data di fine</Form.Label>
              <Form.Control
                type="date"
                placeholder="Data di fine"
                value={esperienze.endDate}
                onChange={(e) => {
                  console.log(e.target.value);

                  handleChange("endDate", e.target.value);
                }}
              />
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={esperienze.description}
                onChange={(e) => {
                  console.log(e.target.value);

                  handleChange("description", e.target.value);
                }}
              />
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Area"
                value={esperienze.area}
                onChange={(e) => {
                  console.log(e.target.value);

                  handleChange("area", e.target.value);
                }}
              />
            </Form.Group>

            <Button
              onClick={postData}
              variant="primary"
              type="submit"
              className="d-block mx-auto "
            >
              Salva
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;
