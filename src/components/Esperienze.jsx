import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from "react-bootstrap"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import ModalModEsp from "../components/ModalModEsp.jsx"
import { useParams } from "react-router-dom"
import ExpDelete from "./ExpDelete.jsx"
import { BsCardImage } from "react-icons/bs"
import { Dropdown } from "react-bootstrap"

const Esperienze = () => {
  const profile = useSelector((state) => state.profile)
  const params = useParams()

  const [fd, setFd] = useState(new FormData()) //FormData e' una classe usata per raccogliere dati non stringa dai form
  const [esperienze, setEsperienze] = useState([])

  const fetchEsperienze = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ"
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${
          params.userId === "me" ? profile._id : params.userId
        }/experiences`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      if (response.ok) {
        const data = await response.json()

        setEsperienze(data)
      } else {
        console.log("err if")
      }
    } catch (err) {
      console.log("err catch")
    }
  }

  useEffect(() => {
    fetchEsperienze()
  }, [params.userId])

  const handleSubmit = async (ev, id) => {
    ev.preventDefault()
    console.log("CIASONE")
    // id.preventDefault()
    console.log(params)
    await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${
        params.userId === "me" ? profile._id : params.userId
      }/experiences/${id}/picture`,

      {
        //qui l'id andra' sostituito con un id DINAMICO!!!!!
        method: "POST",
        body: fd, //non serve JSON.stringify
        headers: {
          //NON serve ContentType 🙂
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ",
        },
      }
    )
    fetchEsperienze()
  }

  const handleFileExp = (ev) => {
    console.log("helo");
    setFd((prev) => {
      //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.delete("experience") //ricordatevi di svuotare il FormData prima 🙂
      prev.append("experience", ev.target.files[0]) //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev
    })
  }

  return (
    <>
      {esperienze?.map((e, i) => (
        <Card key={`cardExp-${i}`}>
          <Card.Body className="  border-bottom ">
            <div className="d-flex justify-content-end">
              <Dropdown>
                <Dropdown.Toggle id={`dropdown-exp-${i}`}>
                  . . .
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <ExpDelete id={e._id} user={e.user}></ExpDelete> Elimina
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <ModalModEsp
                      esperienza={e}
                      refresh={fetchEsperienze}
                    ></ModalModEsp>{" "}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="mb-4 ">
              <img
                src={e.image}
                className="w-100"
                alt="immagine dell'esperienza"
              />
              {/* <EditImageEsp id={e._id} userid={e.user}></EditImageEsp> */}
              <div className="d-flex align-items-center">
                <form
                  className="d-flex align-items-center justift-content-start mt-3"
                  onSubmit={(event) => handleSubmit(event, e._id)}
                >
                  <input
                    id="fileExp"
                    type="file"
                    onChange={handleFileExp}
                    className="d-none"
                  />
                  <label htmlFor="fileExp">
                    <BsCardImage className="text-primary cursor-pointer fs-5 me-3 "></BsCardImage>
                    <span className="fsl text-secondary ">Foto</span>
                  </label>

                  <button
                    // onClick={fetchEsperienze}
                    variant="primary"
                    type="submit"
                    className="btn btn-primary fsl ms-3 rounded-pill"
                  >
                    Salva immagine
                  </button>
                </form>
              </div>
            </div>
            <div>
              <Card.Title className=" mb-5">
                <div className=" d-flex">
                  <h3 className="me-5 fsl">
                    <strong className="fsl">Impiego: </strong> {e.role}{" "}
                  </h3>{" "}
                </div>
              </Card.Title>

              <p className="m-0 fsl p-0">
                <strong>Azienda: </strong>
                {e.company}
              </p>
              <p className="m-0 fsl p-0">
                <strong>Luogo: </strong>
                {e.area}
              </p>
              <p className="m-0 fsl p-0">
                <strong>Descrizione: </strong>
                {e.description}
              </p>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Esperienze
