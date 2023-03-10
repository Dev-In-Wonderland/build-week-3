// import Spinner from "react-bootstrap/Spinner";

// function SpinnerLoad() {
//   return (
//     <div
//       style={{ height: "100px" }}
//       className="d-flex justify-content-center align-items-center"
//     >
//       <Spinner
//         style={{ height: "50px", width: "50px" }}
//         animation="border"
//         variant="primary"
//       />
//     </div>
//   );
// }

// export default SpinnerLoad;

function SpinnerLoad() {
  return (
    <>
      <div className="d-flex justify-content-center w-100 ">
        <div class="spinner">
          <div class="inner"></div>
        </div>
      </div>
    </>
  );
}

export default SpinnerLoad;
