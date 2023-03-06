import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";

const RemovePostAction = (i) => ({ type: "REMOVE_POST", payload: i });

function DeletePost(props) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZlMjc4ODU3OWM2MzAwMTM3Y2Y4YzMiLCJpYXQiOjE2Nzc2MDA2NDksImV4cCI6MTY3ODgxMDI0OX0.EHJrg1AvvFDXzLcMgar_TjwQaMNKVN_tbGsUktYNUHQ";

  const dispatch = useDispatch();
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
        <button
          className="btn-danger"
          type="submit"
          onClick={() => {
            dispatch(fetchDelete());
          }}
        >
          <RiDeleteBin6Fill />
        </button>
      </>
    </>
  );
}

export default DeletePost;
