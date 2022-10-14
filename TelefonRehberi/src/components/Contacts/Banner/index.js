import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Banner() {
  return (
    <div>
      <div className="row " style={{marginTop:200}} >
        <div className="col-md-2 offset-md-3 ">
          <img
            className="rounded img-fluid "
            alt="Phone Logo"
            src="https://www.freeiconspng.com/uploads/office-phone-icon--25.png"
            width={40}
            
          />
        </div>
        <div className="col-md-5 ">
          <h1 className=" text-white ">Telefon Rehberi</h1>
        </div>
        <hr className="mt-3" style={{color:"white"}}/>
      </div>
    </div>
  );
}

export default Banner;
