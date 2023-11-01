import React from "react";

import { BiMailSend, BiPhoneCall,  } from "react-icons/bi";
const Contact = () => {
    const image="https://th.bing.com/th/id/OIP.d7SppTaZDjfDYGghX0X7RQHaE7?pid=ImgDet&rs=1"
  return (
   

      <div className="row contactus mt-4 p-5">
        {/* // Bootstrap Grid System for responsive design */}
        <div className="col-md-6">
          <img
            src={image} 
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>

        {/* // Bootstrap Grid System for responsive design */}
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            <br></br>
            <br></br>
          
            <br></br>
          </p>
          <p className="mt-3">
            <BiMailSend /> : srisakthihardwares.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 7904812215
          </p>
          {/* <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p> */}
        </div>
      </div>
    
  );
};

export default Contact;