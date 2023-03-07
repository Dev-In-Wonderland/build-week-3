



import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";




function CommentMod(props) {



    const [cbody, setcbody] = useState({ comment: "" });

       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ"
    

  const [show, setShow] = useState(false);
  
  
  

  const handleChange = (property, value) => {
    setcbody({ ...cbody, [property]: value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ModFetch = async () => {
    try {
      const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";
      ;
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.data._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cbody),
        
          },
        

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
       <>
         <NavDropdown.Item onClick={handleShow}>
           <HiOutlinePencil />
           <span className="ps-2">Modifica commento</span>
         </NavDropdown.Item>
       </>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modifica commento</Modal.Title>
        </Modal.Header>
        <Modal.Body className="position-relative">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Modifica il tuo commento</Form.Label>
              <Form.Control
                aria-selected
                as="textarea"
                placeholder="Inserisci qui il tuo commento"
                value={cbody.comment}
                onChange={(e) => handleChange(e.target.value)}
              />
              <div className="d-flex justify-content-end">
                <Form.Label>{cbody.comment}</Form.Label>
              </div>
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="primary"
                type="submit"
                
                    onClick={ModFetch}
                
              >
                Pubblica modifiche
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>




  )
}

export default CommentMod;












































