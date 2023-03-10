import React, { useState } from "react"
import { Form, Button, Modal } from "react-bootstrap"
import { HiOutlinePencil } from "react-icons/hi"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function ModalModEsp(props) {
  const [show, setShow] = useState(false)
  const [mod, setMod] = useState(props.esperienza)

  const handleChange = (property, value) => {
    setMod({ ...mod, [property]: value })
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const ModFetch = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ"
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63fe2788579c6300137cf8c3/experiences/` +
          props.esperienza._id,
        {
          method: "PUT",
          body: JSON.stringify(mod),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      if (response.ok) {
        props.refresh()
        setShow(false)
        handleClose()
      } else {
      }
    } catch (err) {}
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ModFetch()
  }

  console.log()

  return (
    <>
    <div onClick={handleShow}>
      <HiOutlinePencil > </HiOutlinePencil> 
      Modifica
    </div>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Experiences</Modal.Title>
        </Modal.Header>
        <Modal.Body className="position-relative">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci altre esperienze</Form.Label>

              <Form.Group className="mb-3">
                <Form.Label>Ruolo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Role"
                  value={mod.role}
                  onChange={(e) => {
                    console.log(e.target.value)

                    handleChange("role", e.target.value)
                  }}
                />
                <Form.Label>Compagnia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company"
                  value={mod.company}
                  onChange={(e) => {
                    console.log(e.target.value)

                    handleChange("company", e.target.value)
                  }}
                />

                <Form.Label>Luogo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Place"
                  value={mod.area}
                  onChange={(e) => {
                    console.log(e.target.value)

                    handleChange("area", e.target.value)
                  }}
                />

                <Form.Label>Descrizione</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={mod.description}
                  onChange={(e) => {
                    console.log(e.target.value)

                    handleChange("description", e.target.value)
                  }}
                />
              </Form.Group>

              {/*               
              <Form.Control
                as="textarea"
                placeholder="Inserisci qui la tua bio"
                value={modifiche.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
              />
              <div className="d-flex justify-content-end">
                <Form.Label>{modifiche.bio}</Form.Label>
              </div> */}
            </Form.Group>
            <Modal.Footer>
              <Button
                onClick={ModFetch}
                variant="primary"
                type="submit"
                className="d-block mx-auto "
              >
                Salva modifiche
              </Button>

              {/* 

              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  handleClose();
                }}
              >
                Salva modifiche
              </Button>
 */}
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalModEsp
