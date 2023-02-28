import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

function Example() {
  const [esperienze, setEsperienze] = useState({

    role:'',
    company: '',
    startDate:'',
    endDate: '',
    description:'',
    area: ''


  })
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = function(field, value){
    setEsperienze((prev)=>{return {...prev, [field]:value}})
  //le quadre sostituiscono
  }







const handleSubmit = e => {
  e.preventDefault();




  const postData = async() => {
    try {
           const token =
             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYWY0NWYxOTNlNjAwMTM4MDdmNjYiLCJpYXQiOjE2Nzc1MDQzMjYsImV4cCI6MTY3ODcxMzkyNn0.X4RA6RfalvoQ6D9OyEfbbERzS2BFy05UMcjihgNKKMo";
           const response = await fetch(
               `https://striveschool-api.herokuapp.com/api/profile/:userId/experiences`,
             { method: "POST",
             headers: { Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({setEsperienze}) }
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





    // const res = await fetch("url", {
    //     method: "POST",
    //     headers: {
    //         Authorization: "",
    //         "Content-Type": "application/json" //=> lingua in cui inviamo il body
    //     },
    //     body: JSON.stringify({info dell exp dallo state})
    // })
}

//QUA VA LA POST











// const fetchme = async () => {
//   try {
//     const token =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYWY0NWYxOTNlNjAwMTM4MDdmNjYiLCJpYXQiOjE2Nzc1MDQzMjYsImV4cCI6MTY3ODcxMzkyNn0.X4RA6RfalvoQ6D9OyEfbbERzS2BFy05UMcjihgNKKMo";
//     const response = await fetch(
//       `https://striveschool-api.herokuapp.com/api/profile/me`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//       dispatch({ type: "SETPROFILE", payload: data });
//     } else {
//       console.log("err if");
//     }
//   } catch (err) {
//     console.log("err catch");
//   }
// };






































// handleSubmit = e => {
//   e.preventDefault();
//   console.log(e);

//   fetch("https://striveschool-api.herokuapp.com/api/profile/", {
//     method: "POST",
//     body: JSON.stringify(this.state.esperienze),
//     headers: {
//       Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjhlMmYxOTNlNjAwMTM4MDdmNTAiLCJpYXQiOjE2Nzc0ODYzMDYsImV4cCI6MTY3ODY5NTkwNn0.zISvpNCnyAT6Gud9asFHNbAGQC8lWmzxECVBhw1xfrM",
//       "Content-Type":"application/json"
//     }
//   })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         alert("qualcosa è andato storto con la richiesta");
//       }
//     })
//     .then(parsedBody => {
//       console.log(parsedBody);
//       alert("La tua richiesta è andata a buon fine, la risorsa è stata creata con id " + parsedBody._id);
//     })
//     .catch(error => {
//       alert(error);
//     });
// };






















  return (
    <>
      <button className='border border-none' onClick={handleShow}>+</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>



        <Form >
              <Form.Group className="mb-3">
                
                <Form.Label>Ruolo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Role"
                  value={esperienze.role}

                  onChange={e => {
                    console.log(e.target.value);

                    handleChange("role", e.target.value);
                  }}
                />
                <Form.Label>Compagnia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company"
                  value={esperienze.company}

                  onChange={e => {
                    console.log(e.target.value);

                    handleChange("company", e.target.value);
                  }}
                />
                  <Form.Label>Data di inizio</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Data di inizio"
                    value={esperienze.startDate}
  
                    onChange={e => {
                      console.log(e.target.value);
  
                      handleChange("startDate", e.target.value);
                    }}
                  />
                    <Form.Label>Data di fine</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Data di fine"
                      value={esperienze.endDate}
    
                      onChange={e => {
                        console.log(e.target.value);
    
                        handleChange("endDate", e.target.value);
                      }}
                    />
                    <Form.Label>Descrizione</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      value={esperienze.description}
    
                      onChange={e => {
                        console.log(e.target.value);
    
                        handleChange("description", e.target.value);
                      }}
                    />
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Area"
                  value={esperienze.area}

                  onChange={e => {
                    console.log(e.target.value);

                    handleChange("area", e.target.value);
                  }}
                />
              </Form.Group>



              <Button onClick={postData} variant="primary" type="submit" className="d-block mx-auto ">
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


}
export default Example