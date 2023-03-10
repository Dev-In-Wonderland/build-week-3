import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi";
import { useSelector } from "react-redux";

function ModalMod() {
  const modifiche = useSelector((state) => {
    return state.profile;
  });
  const [show, setShow] = useState(false);
  const [mod, setMod] = useState(modifiche);

  const handleChange = (property, value) => {
    setMod({ ...mod, [property]: value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ModFetch = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
        method: "PUT",
        body: JSON.stringify(mod),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
      } else {
      }
    } catch (err) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ModFetch();
  };

  console.log();

  return (
    <>
      <HiOutlinePencil onClick={handleShow}> </HiOutlinePencil>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="position-relative">
          <Form onSubmit={handleSubmit}>
            {/* <Form.Group className="mb-3">




              <Form.Label>
                Modifica informazioni del profilo
              </Form.Label>






              
              <Form.Control
                as="textarea"
                placeholder="Inserisci qui la tua bio"
                // value={modifiche.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
              />
              <div className="d-flex justify-content-end">
                <Form.Label></Form.Label>
              </div>
            </Form.Group> */}

            <Form.Label>Inserisci modifiche Nome</Form.Label>

            <Form.Control
              type="text"
              placeholder="Name"
              value={mod.name}
              onChange={(e) => {
                console.log(e.target.value);

                handleChange("name", e.target.value);
              }}
            />

            <Form.Label>Inserisci modifiche Cognome</Form.Label>

            <Form.Control
              type="text"
              placeholder="surname"
              value={mod.surname}
              onChange={(e) => {
                console.log(e.target.value);

                handleChange("surname", e.target.value);
              }}
            />

            <Form.Label>E-mail</Form.Label>

            <Form.Control
              type="text"
              placeholder="Scrivi email"
              value={mod.email}
              onChange={(e) => {
                console.log(e.target.value);

                handleChange("email", e.target.value);
              }}
            />

            <Form.Label>Inserisci modifiche Username</Form.Label>

            <Form.Control
              type="text"
              placeholder="Scrivi username"
              value={mod.username}
              onChange={(e) => {
                console.log(e.target.value);

                handleChange("username", e.target.value);
              }}
            />

            <Form.Label>Inserisci modifiche Impiego</Form.Label>

            <Form.Control
              type="text"
              placeholder="Modifica impiego"
              value={mod.title}
              onChange={(e) => {
                console.log(e.target.value);

                handleChange("title", e.target.value);
              }}
            />

            <Form.Label>Inserisci modifiche Bio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi bio"
              value={mod.bio}
              onChange={(e) => {
                console.log(e.target.value);

                handleChange("bio", e.target.value);
              }}
            />
            <Form.Label>Inserisci modifiche Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Area"
              value={mod.area}
              onChange={(e) => {
                console.log(e.target.value);

                handleChange("area", e.target.value);
              }}
            />

            <Modal.Footer>
              <Button onClick={ModFetch} variant="primary" type="submit" className="d-block mx-auto ">
                Salva modifiche
              </Button>

              {/* <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  handleClose();
                }}
              >
                Salva modifiche
              </Button> */}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalMod;
