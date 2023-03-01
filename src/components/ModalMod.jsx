import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi";
import { useSelector } from "react-redux";

function ModModal() {
  const [show, setShow] = useState(false);
  const [mod, setMod] = useState({
    bio: modifiche.bio,
  });
const modifiche = useSelector((state) => {
    return state;
  });

  const handleChange = (property, value) => {
    setMod({ ...mod, [property]: value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ModFetch = async () => {
    try {
      const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      ;
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          method: "PUT",
          body: JSON.stringify(modifiche),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
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
          <Modal.Title>Edit Experiences</Modal.Title>
        </Modal.Header>
        <Modal.Body className="position-relative">
          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3">
              <Form.Label>
                Inserisci altre esperienze
              </Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Inserisci qui la tua bio"
                value={modifiche.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
              />
              <div className="d-flex justify-content-end">
                <Form.Label>{modifiche.bio}</Form.Label>
              </div>
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  handleClose();
                }}
              >
                Salva
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModModal;














