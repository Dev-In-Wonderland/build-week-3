import { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { Card } from "react-bootstrap"
import CommentPost from "./PostComment.jsx"
import DeleteComment from "./CommentDelete.jsx"

import ModalModComment from "./CommentMod.jsx"

import { Dropdown } from "react-bootstrap"
import { useSelector } from "react-redux"

import { MdAccountCircle } from "react-icons/md"

const Commenti = (props) => {
  const [commenti, setCommenti] = useState([])

  const profile = useSelector((state) => state.profile)

  const CommentiFetch = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ"

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.ok) {
        const data = await response.json()
        setCommenti(data)
      } else {
        console.log("errore nel else di commenti")
      }
    } catch (err) {
      console.log("errore nel catch di aside", err)
    }
  }

  useEffect(() => {
    CommentiFetch()
  }, [])

  console.log(commenti)

  return (
    <>
      {commenti?.map((e, i) => (
        <div className="mt-2">
          <Card>
            <div className="d-flex justify-content-end">
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  . . .
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <DeleteComment id={e._id}></DeleteComment> Elimina
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <ModalModComment
                      comment={e}
                      refresh={CommentiFetch}
                    ></ModalModComment>{" "}
                    Modifica
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* <h3>Commenti:</h3> */}
            <Card.Body className=" d-flex justify-content-center flex-column align-items-center border border-light rounded p-5 m-2 bg-light">
              {/*             
            <Card.Title className=" m-0">
              <p className="m-0  p-2">
                <strong>Nickname: </strong>

                {profile.user.name}
                {profile.user.surname}
              </p>
              <p className="m-0  p-0">
                <strong>Commento: </strong>
                {e.comment}
              </p>
              
            </Card.Title>

             */}

              <div className="d-flex flex-column align-items-start  w-100">
                <p className=" fsl  w-100 p-0">
                  <div className="text-start">
                    <p className="fs-5 m-0 fw-bold d-flex justify-content-start  align-items-center mb-2">
                      {/* <img src={profile.image}  className="profilo-news-input me-3" alt="" /> */}
                      <MdAccountCircle className="fs-3 me-2 "></MdAccountCircle>
                      {e.author}
                      {/* {e.DebugValue.name} */}
                    </p>
                  </div>
                  <div className="mb-3 text-start">{e.comment}</div>
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  )
}

export default Commenti
