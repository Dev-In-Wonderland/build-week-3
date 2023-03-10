import { useState } from "react";

import { useDispatch } from "react-redux";
import {AiFillDelete} from "react-icons/ai"

const RemovePostAction = (i) => ({ type: "REMOVE_POST", payload: i });

function DeletePost(props) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";

  // const dispatch = useDispatch();
  const fetchDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${props.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("if ok");
      } else {
        console.log("err in if");
      }
    } catch (err) {
      console.log("err in catch");
    }
  };

  return (
    <>
      <>
        





      <AiFillDelete onClick={() => {
            fetchDelete();
          }}
 className="m-0 text-start"></AiFillDelete>





{/* 




<button class="btna" type="submit"
          onClick={() => {
            fetchDelete();
          }}>
  <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icona">
  <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
</svg>
</button>

 */}





      </>
    </>
  );
}

export default DeletePost;
